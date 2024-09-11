import prisma from "../../../../lib/prisma"
import { NextResponse } from 'next/server';
// nextjs\src\lib\prisma.js
// POST /api/post
// Required fields in body: title, authorEmail

// Optional fields in body: content

// console.log(prisma);

export async function POST(req, res) {
    
  // console.log(req);
  const body = await req.json(); 
  const  filterby  = body.filterby;

  const method = filterby.method;

  let result = {}


 

  if(method=="admin"){

    const adminEmail = filterby.adminEmail;

    const reports = await prisma.report.findMany({
      where: {
        adminEmail: adminEmail,
      },
    });
    result = reports
  }

  else if(method=="reporter"){

    const reporterEmail = filterby.reporterEmail;
    const reporterName = filterby.reporterName;

    const reports = await prisma.report.findMany({
      where: {

        OR:[
          {
            reporterEmail: {contains: reporterEmail},
          },
          
        ]
        
      }
    });

    result = reports
  }

  else if(method=="oldest"){
    const reports = await prisma.report.findMany({
      orderBy: {
        injuryTime: 'asc',
      },
    });

    result = reports
  }

  else if(method=="latest"){
    const reports = await prisma.report.findMany({
      orderBy: {
        injuryTime: 'desc',
      },
    });

    result = reports
  }

  else if(method=="daterange"){
    const startdate = filterby.startdate;
    const enddate = filterby.enddate;

    const reports = await prisma.report.findMany({
      where: {
        AND:[
          {
            injuryTime: {
              gte: startdate,
            },
          },
          {
            injuryTime: {
              lte: enddate,
            },
          },
        ],
      },
    });

    result = reports
  }

  else{
    const reports = await prisma.report.findMany();

    console.log(reports);
    result  = reports;
  }

 

  



  

  


 console.log(result)
  return NextResponse.json(result)


}
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
  // const  body  = body.body;

  const method = body.method;

  let result = {}


 

  if(method=="admin"){

    const adminEmail = body.adminEmail;

    const reports = await prisma.report.findMany({
      where: {
        adminEmail: adminEmail,
      },
    });
    result = reports
  }

  else if(method=="reporter"){

    const reporterEmail = body.reporterEmail;
    const reporterName = body.reporterName;

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

  else if(method=="oldestreport"){
    const reports = await prisma.report.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });

    result = reports
  }

  else if(method=="latestreport"){
    const reports = await prisma.report.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    result = reports
  }

  else if(method=="oldestinjury"){
    const reports = await prisma.report.findMany({
      orderBy: {
        injuryTime: 'asc',
      },
    });

    result = reports
  }

  else if(method=="latestinjury"){
    const reports = await prisma.report.findMany({
      orderBy: {
        injuryTime: 'desc',
      },
    });

    result = reports
  }

  else if(method=="daterange-report"){
    const startdate = body.startdate;
    const enddate = body.enddate;

    const reports = await prisma.report.findMany({
      where: {
        AND:[
          {
            createdAt: {
              gte: startdate,
            },
          },
          {
            createdAt: {
              lte: enddate,
            },
          },
        ],
      },
    });

    result = reports
  }

  else if(method=="daterange-injury"){
    const startdate = body.startdate;
    const enddate = body.enddate;

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
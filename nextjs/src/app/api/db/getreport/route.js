
//we will send required data on the basis of what method is selected for filtering
//if no method is selected then we will send all the reports
//if admin is selected then we will send reports associated with that admin
//if reporter is selected then we will send reports associated with that reporter
//if oldestreport is selected then we will send reports in ascending order of their creation time
//if latestreport is selected then we will send reports in descending order of their creation time
//if oldestinjury is selected then we will send reports in ascending order of their injury time
//if latestinjury is selected then we will send reports in descending order of their injury time
//if daterange-report is selected then we will send reports in the given date range
//if daterange-injury is selected then we will send reports in the given date range


import prisma from "../../../../lib/prisma"
import { NextResponse } from 'next/server';


export async function POST(req, res) {
    
  // console.log(req);
  const body = await req.json(); 


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

    // console.log(reports);
    result  = reports;
  }

 

  



  

  


//  console.log(result)
  return NextResponse.json(result)


}
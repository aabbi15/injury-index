import prisma from "../../../../lib/prisma"
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    
  const body = await req.json(); 
  const { adminEmail, injuryDetails, reporterEmail,reporterName, injuryTime } = body;

const result = []

  const adminpresent = await prisma.admin.findMany({
    where: {
      email: adminEmail,
    },
  });

  console.log(adminpresent.length);

  if(adminpresent.length === 0){
    
    const temp = await prisma.admin.create({
      data: {
        email: adminEmail,
      },
    });

    console.log(temp);
    result.push(temp);
  }


  const reporterpresent = await prisma.reporter.findMany({
    where: {
      email: reporterEmail,
    },
  });

  if(reporterpresent.length === 0){
    
    const temp = await prisma.reporter.create({
      data: {
        email: reporterEmail,
        name: reporterName,
      },
    });

    console.log(temp);
    result.push(temp);
  }

  const injuryids =[];
  
  const tempy = await prisma.report.create({
    data: {
      
      reporterEmail: reporterEmail,
      adminEmail: adminEmail,
      injuryTime: injuryTime,
    },
  });

  const reportid = tempy.id;

  for (const [key, value] of Object.entries(injuryDetails)) {

    console.log(key, value);
    const injury = await prisma.injury.create({
      data: {
        bodyPart: key,
        details: value,
        reportId: reportid,
      },
    });

    console.log(injury);
    result.push(injury);

    // injuryids.push(injury.id);
  }

  


  result.push(tempy);

  

  // console.log(result);
  

  


 
  return NextResponse.json(result)


}
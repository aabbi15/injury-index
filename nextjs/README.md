I need you to write a readme file that is my dev project documentation. i am going to be describing my project structure to you indetail 


LEts start with my backend in next js (ie the api directory)

so i have majorly 2 api routes auth and db

auth routes is connect to auth0 account using inbuilt auth0 function for next js like import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth();

the db one has 4 routes

addreport deletereport getreport reportdetails

which do the functions as follows

add report gets   const { adminEmail, injuryDetails, reporterEmail,reporterName, injuryTime } = body;


this as request 

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

  // console.log(adminpresent.length);

  if(adminpresent.length === 0){
    
    const temp = await prisma.admin.create({
      data: {
        email: adminEmail,
      },
    });

    // console.log(temp);
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

    // console.log(temp);
    result.push(temp);
  }


  
  const tempy = await prisma.report.create({
    data: {
      
      reporterEmail: reporterEmail,
      adminEmail: adminEmail,
      injuryTime: injuryTime,
    },
  });

  const reportid = tempy.id;

  for (const [key, value] of Object.entries(injuryDetails)) {

    // console.log(key, value);
    const injury = await prisma.injury.create({
      data: {
        bodyPart: key,
        details: value,
        reportId: reportid,
      },
    });

    // console.log(injury);
    result.push(injury);

    // injuryids.push(injury.id);
  }

  


  result.push(tempy);

  

  // console.log(result);
  

  


 
  return NextResponse.json(result)


}

This is the file ineed you to dummarize what it does insimple english for developers


this is delete report 

import prisma from "../../../../lib/prisma"
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    
  const body = await req.json(); 

  const { reportId} = body;

let result = []

let todelete = await prisma.injury.findMany({
    where: {
      reportId: reportId,
    },
    });

    console.log(todelete);

    
    todelete.map( async (item) => {
        const report = await prisma.injury.delete({
            where: {
              id: item.id,
            },
            });
        
            console.log(report);
        
            result.push(report);
    })
    

    const report2 = await prisma.report.delete({
    where: {
      id: reportId,
    },
    });

    console.log(report2);

    result.push(report2);
 
  return NextResponse.json(result)


}

this is getreport

import prisma from "../../../../lib/prisma"
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    
  const body = await req.json(); 

  const { reportId} = body;

let result = []

let todelete = await prisma.injury.findMany({
    where: {
      reportId: reportId,
    },
    });

    console.log(todelete);

    
    todelete.map( async (item) => {
        const report = await prisma.injury.delete({
            where: {
              id: item.id,
            },
            });
        
            console.log(report);
        
            result.push(report);
    })
    

    const report2 = await prisma.report.delete({
    where: {
      id: reportId,
    },
    });

    console.log(report2);

    result.push(report2);
 
  return NextResponse.json(result)


}

this is report details one 

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function POST(req,res){

    const body = await req.json();


    const reportId = body.reportId;

    console.log(reportId);



    const report = await prisma.report.findMany({

        where: {

            id: reportId

        }
    })

    if(report.length == 0){

        return NextResponse.json({error:"No such report found"});
    }

    const injuries = await prisma.injury.findMany({

        where: {

            reportId: reportId

        }
    })

    console.log(report);

    // const injuries = injuries2.data;

    const {adminEmail , reporterEmail, injuryTime, createdAt} = report[0];

    const admin = await prisma.admin.findMany({

        where: {

            email: adminEmail

        }
    });

    const adminName = admin[0].name;

    const reporter =  await prisma.reporter.findMany({

        where: {

            email: reporterEmail

        }
    });

    const reporterName = reporter[0].name;

    console.log(adminName, reporterName, reporterEmail, adminEmail, injuryTime, createdAt,injuries);
    
    return NextResponse.json({adminName, reporterName, reporterEmail, adminEmail, injuryTime, createdAt,injuries});




    return NextResponse.json({});

}


Ok now lets talk about the database

I have use Prisma as my ORM along with MOngoDB as the database and this tis the tables that i have used in the db

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Report {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId

  injuryTime    DateTime

  reporter      Reporter  @relation(fields: [reporterEmail], references: [email])
  reporterEmail    String    
  admin         Admin     @relation(fields: [adminEmail], references: [email])
  adminEmail       String    

  injuries      Injury[]

  createdAt     DateTime  @default(now())
}

model Reporter {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId
  email         String    @unique
  name          String?

  reports       Report[]  // Relation to the reports created for this reporter

  
}

model Admin {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId
  email         String    @unique
  name          String?
  adminReports  Report[]  // Relation to the reports created by this admin

  
}

model Injury {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId
  bodyPart      String
  details       String
  report        Report    @relation(fields: [reportId], references: [id], onDelete: Cascade)
  reportId      String    @db.ObjectId
}





Summarize this thing in english what the tables are and how they are connected. use knowledge of the api codes to figure out whats what


I need you to reade documentation and give me a readmefile for this backend and db 


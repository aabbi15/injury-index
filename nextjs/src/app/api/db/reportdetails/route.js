//given the report id we will fetch the report details and the injuries associated with it.
//Since all of the things like reporters name and admin name are not associated in the report table
//we will have to fetch them from the reporter and admin table.
// We will send the admin name, reporter name, reporter email, admin email, injury time, created at and the injuries associated with the report.



import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function POST(req,res){

    const body = await req.json();


    const reportId = body.reportId;

    console.log(reportId,"from route");



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

    console.log(report,"fetched from route");



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

    // console.log(adminName, reporterName, reporterEmail, adminEmail, injuryTime, createdAt,injuries);
    
    return NextResponse.json({adminName, reporterName, reporterEmail, adminEmail, injuryTime, createdAt,injuries});





}
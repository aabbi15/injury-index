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
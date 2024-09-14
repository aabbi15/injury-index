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
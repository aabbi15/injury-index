//since there is cascading on for the relation between injuries and reports, deleteion of the report
// automatically deletes the injuries associated with it.

// Hence, we can directly delete the report and the injuries will be deleted automatically.



import prisma from "../../../../lib/prisma"
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    
  const body = await req.json(); 

  const { reportId} = body;

let result = []


    

    const report2 = await prisma.report.delete({
    where: {
      id: reportId,
    },
    });

    // console.log(report2);

    result.push(report2);
 
  return NextResponse.json(result)


}
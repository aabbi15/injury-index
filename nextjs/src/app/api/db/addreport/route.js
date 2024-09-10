import prisma from "../../../../lib/prisma"
import { NextResponse } from 'next/server';
// nextjs\src\lib\prisma.js
// POST /api/post
// Required fields in body: title, authorEmail

// Optional fields in body: content

// console.log(prisma);

export async function POST(req, res) {
    
  const body = await req.json(); 
  const { name, email } = body;

  console.log(body)
  console.log(name , email);

  const result = await prisma.admin.create({
    data: {
      email: email,
      name: name,
    },
  });


 
  return NextResponse.json(result)


}
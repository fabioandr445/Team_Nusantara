import prisma from "@/src/lib/prisma";
import { hashPassword } from "@/src/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  const hashed = await hashPassword(password);

  const user = await prisma.user.create({
    data: { name, email, password: hashed },
  });

  return NextResponse.json({ user });
}

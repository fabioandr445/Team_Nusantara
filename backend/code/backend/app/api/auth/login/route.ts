import prisma from "@/src/lib/prisma";
import { comparePassword, signToken } from "@/src/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 400 });

  const valid = await comparePassword(password, user.password);
  if (!valid)
    return NextResponse.json({ error: "Password wrong" }, { status: 400 });

const token = signToken({ 
  id: user.id,
  email: user.email,
});

  return NextResponse.json({ token, user });
}

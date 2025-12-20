import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const user = getAuthUser(req);

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const data = await req.json();

  const booking = await prisma.booking.create({
    data: {
      ...data,
      userId: user.id,
    },
  });

  return NextResponse.json(booking);
}

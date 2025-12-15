import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Admin update tracking
export async function POST(req: Request) {
  const { bookingId, progress } = await req.json();

  const tracking = await prisma.tracking.upsert({
    where: { bookingId },
    update: { progress },
    create: { bookingId, progress },
  });

  return NextResponse.json(tracking);
}

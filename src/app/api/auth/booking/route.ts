import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all bookings
export async function GET() {
  const bookings = await prisma.booking.findMany({
    include: { tracking: true },
  });
  return NextResponse.json(bookings);
}

// CREATE booking
export async function POST(req: Request) {
  const data = await req.json();

  const booking = await prisma.booking.create({
    data,
  });

  return NextResponse.json(booking);
}

// UPDATE booking (only if unpaid)
export async function PUT(req: Request) {
  const { id, ...data } = await req.json();

  const booking = await prisma.booking.findUnique({ where: { id } });

  if (!booking || booking.paymentStatus === "paid") {
    return NextResponse.json(
      { message: "Booking cannot be updated" },
      { status: 403 }
    );
  }

  const updated = await prisma.booking.update({
    where: { id },
    data,
  });

  return NextResponse.json(updated);
}

// DELETE booking
export async function DELETE(req: Request) {
  const { id } = await req.json();

  await prisma.booking.delete({ where: { id } });

  return NextResponse.json({ message: "Deleted" });
}
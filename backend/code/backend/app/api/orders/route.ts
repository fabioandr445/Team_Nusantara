import prisma from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const orders = await prisma.order.findMany({
    include: { user: true, service: true }
  });
  return NextResponse.json(orders);
}

export async function POST(req: Request) {
  const body = await req.json();

  const order = await prisma.order.create({ data: body });
  return NextResponse.json(order);
}

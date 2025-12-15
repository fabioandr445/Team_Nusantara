import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyJwt } from "@/lib/jwt";

// =======================
// GET ALL TRACKING (ADMIN ONLY)
// =======================
export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const payload = verifyJwt(token) as { id: number; role: string };

    if (payload.role !== "admin") {
      return NextResponse.json(
        { message: "Forbidden - Admin only" },
        { status: 403 }
      );
    }

    const tracking = await prisma.tracking.findMany({
      include: {
        booking: {
          include: {
            user: true,
          },
        },
      },
    });

    return NextResponse.json(tracking);
  } catch (error) {
    console.error("TRACKING GET ERROR:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// =======================
// CREATE / UPDATE TRACKING (ADMIN ONLY)
// =======================
export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const payload = verifyJwt(token) as { id: number; role: string };

    if (payload.role !== "admin") {
      return NextResponse.json(
        { message: "Forbidden - Admin only" },
        { status: 403 }
      );
    }

    const { bookingId, progress } = await req.json();

    if (!bookingId || !progress) {
      return NextResponse.json(
        { message: "bookingId & progress are required" },
        { status: 400 }
      );
    }

    const existingTracking = await prisma.tracking.findUnique({
      where: { bookingId },
    });

    let tracking;

    if (existingTracking) {
      tracking = await prisma.tracking.update({
        where: { bookingId },
        data: { progress },
      });
    } else {
      tracking = await prisma.tracking.create({
        data: {
          bookingId,
          progress,
        },
      });
    }

    return NextResponse.json(tracking);
  } catch (error) {
    console.error("TRACKING POST ERROR:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

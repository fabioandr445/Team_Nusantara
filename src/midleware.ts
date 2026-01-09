import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ==========================
  // API YANG TIDAK PERLU LOGIN
  // ==========================
  if (
    pathname.startsWith("/api/auth/login") ||
    pathname.startsWith("/api/auth/register") ||
    pathname.startsWith("/api/health")
  ) {
    return NextResponse.next();
  }

   // ==========================
  // CEK AUTH HEADER
  // ==========================
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const payload = verifyJwt(token) as {
      id: number;
      role: "user" | "admin";
    };

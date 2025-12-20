import { NextRequest } from "next/server";
import { verifyJwt } from "./jwt";

export function getAuthUser(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) return null;

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = verifyJwt(token);
    return decoded as {
      id: number;
      role: "user" | "admin";
      iat?: number;
      exp?: number;
    };
  } catch {
    return null;
  }
}

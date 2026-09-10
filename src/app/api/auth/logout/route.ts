import { NextResponse } from "next/server";
import { getCustomerSession } from "@/lib/auth";

export async function POST() {
  const session = await getCustomerSession();
  session.destroy();
  return NextResponse.json({ success: true });
}

export async function GET() {
  const session = await getCustomerSession();
  session.destroy();
  return NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"));
}

import { NextResponse } from "next/server";
import { getAllCustomers } from "@/lib/dal/users";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit") as string, 10) : undefined;
    const skip = searchParams.get("skip") ? parseInt(searchParams.get("skip") as string, 10) : undefined;
    const search = searchParams.get("search") || undefined;
    
    const customers = await getAllCustomers({ limit, skip, search });
    return NextResponse.json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

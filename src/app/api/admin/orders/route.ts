import { NextResponse } from "next/server";
import { getAllOrders } from "@/lib/dal/orders";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit") as string, 10) : undefined;
    const skip = searchParams.get("skip") ? parseInt(searchParams.get("skip") as string, 10) : undefined;
    
    const orders = await getAllOrders({ limit, skip });
    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

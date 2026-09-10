import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getAllProducts } from "@/lib/dal/products";

export async function GET() {
  try {
    const products = await getAllProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { variants, stock, ...productData } = data;
    
    const product = await prisma.product.create({
      data: {
        ...productData,
        stock: stock || 0,
        variants: productData.hasVariants && variants && variants.length > 0 ? {
          create: variants
        } : undefined
      },
      include: {
        category: true,
        variants: true
      }
    });
    
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}

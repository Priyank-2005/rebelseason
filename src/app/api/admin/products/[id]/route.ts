import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getProductById } from "@/lib/dal/products";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const product = await getProductById(id);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const data = await req.json();
    const { variants, stock, ...productData } = data;
    
    if (productData.hasVariants) {
      await prisma.productVariant.deleteMany({
        where: { productId: id }
      });
    } else {
      await prisma.productVariant.deleteMany({
        where: { productId: id }
      });
    }

    const product = await prisma.product.update({
      where: { id },
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
    console.error("Error updating product:", error);
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.product.delete({
      where: { id }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}

import { prisma } from "@/lib/db";
import { Prisma } from "@prisma/client";

export const categoryInclude = {
  _count: {
    select: {
      products: true,
    },
  },
} satisfies Prisma.CategoryInclude;

export type CategoryWithRelations = Prisma.CategoryGetPayload<{
  include: typeof categoryInclude;
}>;

/**
 * Fetch all categories ordered alphabetically by name.
 */
export async function getAllCategories(): Promise<CategoryWithRelations[]> {
  return prisma.category.findMany({
    include: categoryInclude,
    orderBy: { name: "asc" },
  });
}

/**
 * Fetch a single category by its slug.
 */
export async function getCategoryBySlug(
  slug: string
): Promise<CategoryWithRelations | null> {
  return prisma.category.findUnique({
    where: { slug },
    include: categoryInclude,
  });
}

/**
 * Fetch a single category by its ID.
 */
export async function getCategoryById(
  id: string
): Promise<CategoryWithRelations | null> {
  return prisma.category.findUnique({
    where: { id },
    include: categoryInclude,
  });
}

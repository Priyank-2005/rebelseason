import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/lib/dal/categories";
import { getProductsByCategory, getNewArrivals } from "@/lib/dal/products";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  
  let categoryName = "";
  let products = [];
  
  if (resolvedParams.slug === "new-arrivals") {
    categoryName = "New Arrivals";
    products = await getNewArrivals();
  } else {
    const category = await getCategoryBySlug(resolvedParams.slug);
    if (!category) {
      return notFound();
    }
    categoryName = category.name;
    products = await getProductsByCategory(resolvedParams.slug);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="font-heading text-4xl sm:text-5xl font-medium mb-4">{categoryName}</h1>
      </div>

      <div className="flex justify-between items-center py-4 border-y border-border mb-8">
        <Button variant="ghost" className="text-sm font-medium gap-2">
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </Button>
        <div className="text-sm text-muted-foreground hidden sm:block">
          {products.length} Results
        </div>
        <Button variant="ghost" className="text-sm font-medium gap-2">
          Sort by: Recommended
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          No products found in this category.
        </div>
      )}
    </div>
  );
}

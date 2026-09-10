import { ProductCard } from "@/components/product/ProductCard";
import { getAllProducts } from "@/lib/dal/products";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="font-heading text-5xl sm:text-6xl font-normal mb-6">Shop All</h1>
        <p className="text-muted-foreground text-[15px] font-light max-w-2xl">
          Discover our complete collection of effortless essentials and statement pieces.
        </p>
      </div>

      {/* Toolbar (Filters & Sorting) */}
      <div className="flex justify-between items-center py-4 border-y border-border mb-12">
        <Button variant="ghost" className="text-[12px] uppercase tracking-[0.1em] font-semibold gap-2 hover:bg-transparent">
          <SlidersHorizontal className="w-4 h-4 stroke-[1.5]" />
          Filter
        </Button>
        <div className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground hidden sm:block font-medium">
          {products.length} Results
        </div>
        <Button variant="ghost" className="text-[12px] uppercase tracking-[0.1em] font-semibold gap-2 hover:bg-transparent">
          Sort: Recommended
          <ChevronDown className="w-4 h-4 stroke-[1.5]" />
        </Button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination (Mock) */}
      <div className="mt-24 flex justify-center">
        <Button variant="outline" className="rounded-none px-12 h-12 font-semibold uppercase tracking-[0.2em] text-[11px] border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors">
          Load More
        </Button>
      </div>
    </div>
  );
}

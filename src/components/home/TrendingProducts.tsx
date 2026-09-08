import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { mockProducts } from "@/data/mock";

export function TrendingProducts() {
  // Use the first 4 products for trending
  const trendingProducts = mockProducts.slice(0, 4);

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
              Trending Products
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Handpicked favorites our customers are loving right now.
            </p>
          </div>
          <Link 
            href="/products" 
            className="inline-block border-b border-foreground pb-1 text-[11px] font-semibold tracking-[0.15em] uppercase hover:text-muted-foreground hover:border-muted-foreground transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

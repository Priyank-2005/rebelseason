import Link from "next/link";
import { mockProducts } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";

export function NewArrivals() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto bg-background">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="font-heading text-4xl sm:text-5xl font-medium mb-6">Latest Arrivals</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-[15px] font-light leading-relaxed">
          Explore our newest pieces, crafted with meticulous attention to detail and designed to elevate your everyday wardrobe.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-6 lg:gap-x-8">
        {mockProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Button 
          variant="outline" 
          size="lg" 
          asChild 
          className="rounded-none tracking-[0.15em] text-[11px] font-semibold uppercase px-12 h-12 border-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
    </section>
  );
}

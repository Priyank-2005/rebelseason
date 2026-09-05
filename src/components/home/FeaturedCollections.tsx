import Link from "next/link";
import { mockCategories } from "@/data/mock";
import { ArrowRight } from "lucide-react";

export function FeaturedCollections() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-[11px] font-medium tracking-[0.3em] uppercase mb-4 text-muted-foreground">
          Curated Essentials
        </span>
        <h2 className="font-heading text-4xl sm:text-5xl font-medium mb-6">Shop by Category</h2>
        <Link 
          href="/categories" 
          className="group flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.15em] hover:text-muted-foreground transition-colors"
        >
          View All <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 w-full">
        {mockCategories.map((category) => (
          <Link 
            key={category.id} 
            href={`/categories/${category.slug}`} 
            className="group relative block overflow-hidden bg-secondary w-full"
            style={{ aspectRatio: '3/4' }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('${category.image}')` }}
            />
            {/* Subtle elegant gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
              <h3 className="font-heading text-2xl lg:text-3xl text-white font-normal tracking-wide mb-3 transform transition-transform duration-500 group-hover:-translate-y-2 whitespace-nowrap overflow-hidden text-ellipsis w-full">
                {category.name}
              </h3>
              <span className="inline-block border-b border-white text-white pb-1 text-[10px] font-semibold uppercase tracking-[0.2em] opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                Discover
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturedCollections() {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* Full-width clothing rack photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=2000')" }}
      />
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center">
        <div className="flex flex-col items-start justify-center py-12 max-w-lg">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold italic text-foreground mb-4">
            Featured collection
          </h2>
          <p className="text-foreground/70 text-[14px] font-light leading-relaxed mb-8">
            Discover our curated collection featuring hand-picked favorites that blend style and quality.
          </p>
          <Button 
            asChild 
            className="rounded-md bg-foreground text-background hover:bg-foreground/85 text-[13px] font-medium px-8 h-12 tracking-wide"
          >
            <Link prefetch={false} href="/products">Shop now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

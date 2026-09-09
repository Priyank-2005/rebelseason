import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NewArrivals() {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* Full-width fashion photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000')" }}
      />
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          
          {/* Left: Brand Art */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center select-none">
              <span className="font-heading italic text-2xl sm:text-3xl text-white/80 mb-1 block">The</span>
              <span className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase leading-none block">
                REBEL
              </span>
              <span className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase leading-none block -mt-1">
                SEASON
              </span>
            </div>
          </div>

          {/* Right: Text + CTA */}
          <div className="flex-1 flex flex-col items-start md:items-end justify-center text-right py-12">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-white italic mb-4">
              New arrivals
            </h2>
            <p className="text-white/80 text-[14px] font-light leading-relaxed max-w-md mb-8 text-right">
              Introducing our latest products, made especially for this season. Shop your favorites before they&apos;re gone.
            </p>
            <Button 
              asChild 
              className="rounded-md bg-foreground text-background hover:bg-foreground/85 text-[13px] font-medium px-8 h-12 tracking-wide"
            >
              <Link href="/categories/new-arrivals">Shop now</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

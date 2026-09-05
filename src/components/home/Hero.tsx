import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col md:flex-row bg-secondary overflow-hidden">
      
      {/* Left Image Side */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-auto relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200')" 
          }}
        />
      </div>

      {/* Right Text Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-primary/30">
        <div className="max-w-md w-full flex flex-col items-start">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-foreground/70">
            Spring Collection
          </span>
          <h1 className="font-heading text-5xl lg:text-7xl font-normal leading-[1.1] mb-8 text-foreground">
            Modern.<br/>
            Minimal.<br/>
            Muse.
          </h1>
          <p className="text-[14px] font-light text-foreground/80 leading-relaxed mb-10">
            Discover the new collection. Thoughtfully designed pieces that transcend seasons, elevating your everyday wardrobe with effortless elegance.
          </p>
          <div className="flex gap-4">
            <Button 
              asChild 
              className="rounded-none bg-foreground text-background hover:bg-foreground/90 tracking-[0.2em] text-[10px] font-bold uppercase px-8 h-12"
            >
              <Link href="/products">Shop Collection</Link>
            </Button>
            <Button 
              variant="outline"
              asChild 
              className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background tracking-[0.2em] text-[10px] font-bold uppercase px-8 h-12 bg-transparent transition-colors group"
            >
              <Link href="/categories/new-arrivals" className="flex items-center gap-2">
                New In <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
    </section>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section 
      className="relative w-full overflow-hidden flex items-end pb-12 lg:pb-0 lg:items-center"
      style={{ 
        minHeight: '600px', 
        height: '85vh', 
        maxHeight: '850px'
      }}
    >
      {/* Mobile Background */}
      <div className="absolute inset-0 bg-cover bg-center block md:hidden" style={{ backgroundImage: "url('/hero-bg-mobile.jpg?v=3')" }} />
      {/* Tablet Background */}
      <div className="absolute inset-0 bg-cover bg-center hidden md:block lg:hidden" style={{ backgroundImage: "url('/hero-bg-tablet.jpg?v=3')" }} />
      {/* Desktop Background */}
      <div className="absolute inset-0 bg-cover bg-right lg:bg-center hidden lg:block" style={{ backgroundImage: "url('/hero-bg-taller.jpg?v=2')" }} />
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 w-full pt-16">
        <div className="max-w-md">
          <h1 className="font-heading text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.2] sm:leading-[1.1] mb-8 text-foreground drop-shadow-sm md:drop-shadow-none">
            Browse our <br />
            latest products
          </h1>
          <Button 
            asChild 
            variant="outline"
            className="rounded-full border-foreground/40 bg-transparent text-foreground hover:bg-foreground hover:text-background text-[13px] font-medium px-8 h-12 tracking-wide transition-all"
          >
            <Link href="/products">Shop all</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

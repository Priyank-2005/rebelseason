import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section 
      className="relative w-full overflow-hidden flex items-end pb-12 lg:pb-0 lg:items-center bg-cover bg-[position:85%_center] md:bg-right lg:bg-center bg-no-repeat"
      style={{ 
        minHeight: '600px', 
        height: '85vh', 
        maxHeight: '850px',
        backgroundImage: "url('/hero-bg-taller.jpg?v=1')"
      }}
    >
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

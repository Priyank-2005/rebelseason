import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Bestsellers() {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* Right side: lifestyle image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=2000')" }}
      />
      {/* Gradient overlay so left text is readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center">
        <div className="flex flex-col items-start justify-center py-12 max-w-lg">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold italic text-foreground mb-4">
            Bestsellers
          </h2>
          <p className="text-foreground/70 text-[14px] font-light leading-relaxed mb-8">
            Discover the bestsellers that have captured our customers with their perfect blend of function, style, and quality.
          </p>
          <Button 
            asChild 
            className="rounded-md bg-foreground text-background hover:bg-foreground/85 text-[13px] font-medium px-8 h-12 tracking-wide"
          >
            <Link href="/products">Shop now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

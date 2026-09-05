import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EditorialPage() {
  return (
    <div className="w-full flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1550614000-4b95dcb56247?auto=format&fit=crop&q=80&w=2000')" 
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4">
          <span className="text-[11px] font-semibold tracking-[0.4em] uppercase mb-6 block text-white/80">
            The Journal
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-normal text-white">
            Editorial.
          </h1>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-8 block">Our Philosophy</span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal leading-snug mb-10 text-foreground">
          "Simplicity is the ultimate sophistication. We create pieces that don't shout for attention, but demand it through quiet elegance."
        </h2>
        <p className="text-[14px] font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
          Rebel Season was founded on a simple principle: clothing should empower the wearer, not overpower them. By focusing on exquisite tailoring, premium fabrics, and a muted color palette, we provide a foundation for your personal style to shine through.
        </p>
      </section>

      {/* Lookbook Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          
          {/* Look 1 */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-secondary">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512413914595-654765d774a3?auto=format&fit=crop&q=80&w=1200')" }}
              />
            </div>
            <div className="text-center md:text-left pt-2 pb-12">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground">Look 01 &mdash; The Structured Blazer</span>
            </div>
          </div>

          {/* Look 2 (Offset for masonry feel) */}
          <div className="flex flex-col gap-4 md:pt-24">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&q=80&w=1200')" }}
              />
            </div>
            <div className="text-center md:text-left pt-2 pb-12">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground">Look 02 &mdash; Effortless Silk</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* The Founder */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full relative aspect-square md:aspect-[3/4] max-w-lg mx-auto">
             <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000')" }}
              />
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4">The Founder</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-normal mb-8">Riya Roopwani</h2>
            <div className="space-y-6 text-[14px] font-light leading-relaxed max-w-lg">
              <p>
                "I started Rebel Season because I couldn't find pieces that seamlessly transitioned from a morning meeting to an evening out without compromising on comfort or looking too 'loud'. 
              </p>
              <p>
                My goal is to create a wardrobe that feels like armor—giving you the confidence to conquer your day, while remaining undeniably feminine and elegant."
              </p>
            </div>
            <Button 
              asChild 
              className="mt-10 rounded-none bg-foreground text-background hover:bg-foreground/90 tracking-[0.2em] text-[10px] font-bold uppercase px-8 h-12"
            >
              <Link href="/products">Shop Her Favorites</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

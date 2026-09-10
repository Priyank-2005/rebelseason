"use client";

export function Testimonials() {
  const customerImages = [
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section className="py-20 lg:py-24 bg-secondary/30 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-foreground/20" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground/70">
              Happy Customers
            </span>
            <div className="h-[1px] w-12 bg-foreground/20" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mb-3">
            Customer <span className="text-primary italic">Love</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Real feedback from our Instagram community
          </p>
        </div>

        {/* Grid for Customer Images (matching screenshot) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {customerImages.map((img, i) => (
            <div 
              key={i}
              className="relative w-full aspect-[9/16] rounded-[24px] overflow-hidden block bg-background shadow-sm hover:scale-105 transition-transform duration-500"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${img}')` }}
              />
              {/* Optional slight dark gradient to simulate the vibe of a screenshot */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

export function Testimonials({ settings }: { settings?: Record<string, string> }) {
  const rawImages = [
    settings?.test1_image,
    settings?.test2_image,
    settings?.test3_image,
    settings?.test4_image,
    settings?.test5_image,
    settings?.test6_image,
  ];
  const customerImages = rawImages.filter(Boolean);
  
  if (customerImages.length === 0) return null;

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



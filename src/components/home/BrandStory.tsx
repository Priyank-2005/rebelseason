import Link from "next/link";

export function BrandStory() {
  return (
    <section className="bg-secondary">
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Image Side */}
        <div className="flex-1 w-full max-w-xl mx-auto lg:max-w-none">
          <div className="relative aspect-[4/5] w-full bg-background overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512413914595-654765d774a3?auto=format&fit=crop&q=80&w=1200')" }}
            />
          </div>
        </div>

        {/* Text Side */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-6 text-muted-foreground">
            About The Brand
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-8 text-foreground">
            A New Perspective<br />on Everyday Luxury.
          </h2>
          <div className="space-y-6 text-muted-foreground text-[15px] font-light leading-relaxed max-w-lg mb-10">
            <p>
              Rebel Season was born from a desire to create clothing that makes women feel effortlessly confident. We believe in minimal aesthetics, premium materials, and timeless silhouettes.
            </p>
            <p>
              Every piece is thoughtfully designed by Riya Roopwani to blend seamlessly into your wardrobe, elevating your everyday style without overcomplicating it. It's about finding beauty in simplicity.
            </p>
          </div>
          <Link 
            href="/editorial" 
            className="inline-block border-b border-foreground pb-1 text-[11px] font-semibold text-foreground hover:text-muted-foreground hover:border-muted-foreground transition-all uppercase tracking-[0.2em]"
          >
            Read Our Story
          </Link>
        </div>
        
      </div>
    </section>
  );
}

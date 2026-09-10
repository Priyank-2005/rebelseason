"use client";

import { Play } from "lucide-react";

export function ReelsCarousel({ settings }: { settings?: Record<string, string> }) {
  const rawReels = [
    { id: 1, image: settings?.reel1_image, link: "https://www.instagram.com/rebel_seasonn/" },
    { id: 2, image: settings?.reel2_image, link: "https://www.instagram.com/rebel_seasonn/" },
    { id: 3, image: settings?.reel3_image, link: "https://www.instagram.com/rebel_seasonn/" },
    { id: 4, image: settings?.reel4_image, link: "https://www.instagram.com/rebel_seasonn/" },
    { id: 5, image: settings?.reel5_image, link: "https://www.instagram.com/rebel_seasonn/" },
    { id: 6, image: settings?.reel6_image, link: "https://www.instagram.com/rebel_seasonn/" },
  ];
  const reels = rawReels.filter(r => r.image);
  
  if (reels.length === 0) return null;

  return (
    <section className="py-20 lg:py-24 bg-background overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-foreground/20" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground/70">
              Behind the brand
            </span>
            <div className="h-[1px] w-12 bg-foreground/20" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground">
            Watch Our <span className="text-primary italic">Reels</span>
          </h2>
        </div>

        {/* Static Grid for Reels (matching the screenshot exactly) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {reels.map((reel) => (
            <a 
              key={reel.id}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-[9/16] rounded-[24px] overflow-hidden group block bg-secondary shadow-sm"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${reel.image}')` }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              
              {/* Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 ml-1 fill-white" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}




"use client";

import { Play } from "lucide-react";

export function ReelsCarousel() {
  const reels = [
    { id: 1, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800", link: "https://www.instagram.com/rebel_seasonn/" },
    { id: 2, image: "https://images.unsplash.com/photo-1529139574466-a303027c028b?auto=format&fit=crop&q=80&w=800", link: "https://www.instagram.com/rebel_seasonn/" },
    { id: 3, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800", link: "https://www.instagram.com/rebel_seasonn/" },
    { id: 4, image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&q=80&w=800", link: "https://www.instagram.com/rebel_seasonn/" },
    { id: 5, image: "https://images.unsplash.com/photo-1583391733958-d2597285ea93?auto=format&fit=crop&q=80&w=800", link: "https://www.instagram.com/rebel_seasonn/" },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
            Styled by You
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Tag @rebel_seasonn to be featured. Follow us for the latest looks.
          </p>
        </div>

        {/* Auto-rotating Marquee Container */}
        <div className="flex overflow-hidden group">
          {/* We duplicate the reels array so the marquee loops seamlessly (-50% translation) */}
          <div className="flex gap-4 sm:gap-6 animate-[marquee_20s_linear_infinite] group-hover:[animation-play-state:paused] w-max pr-4 sm:pr-6">
            {[...reels, ...reels, ...reels].map((reel, index) => (
              <a 
                key={`${reel.id}-${index}`}
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-none w-[140px] sm:w-[160px] lg:w-[180px] aspect-[9/16] rounded-xl overflow-hidden group/item block bg-secondary shadow-sm"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover/item:scale-105"
                  style={{ backgroundImage: `url('${reel.image}')` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover/item:bg-black/30 transition-colors duration-300" />
                
                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-transform duration-300 group-hover/item:scale-110">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-1 fill-white" />
                  </div>
                </div>

                {/* IG handle overlay */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white text-[11px] sm:text-[13px] font-medium truncate drop-shadow-md">
                  @rebel_seasonn
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

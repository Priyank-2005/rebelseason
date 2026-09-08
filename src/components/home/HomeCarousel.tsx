"use client";

import { useState, useEffect } from "react";
import { NewArrivals } from "@/components/home/NewArrivals";
import { Bestsellers } from "@/components/home/Bestsellers";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";

export function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [NewArrivals, Bestsellers, FeaturedCollections];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: '600px', height: '80vh', maxHeight: '800px' }}>
      {slides.map((SlideComponent, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <SlideComponent />
        </div>
      ))}

      {/* Optional: Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

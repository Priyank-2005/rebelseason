"use client";

import { useState, useEffect } from "react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "The quality is absolutely incredible. Every piece I've bought from Rebel Season feels like true luxury, but is effortless enough for everyday wear.",
      author: "Sarah J.",
    },
    {
      id: 2,
      text: "Finally found a brand that understands modern elegance. The fabrics are beautiful and the fit is consistently perfect.",
      author: "Emily M.",
    },
    {
      id: 3,
      text: "I get compliments every time I wear my Rebel Season coat. It's become the absolute staple piece in my wardrobe.",
      author: "Priya R.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-foreground">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
          ))}
        </div>

        <div className="relative min-h-[320px] md:min-h-[200px] flex items-center justify-center">
          {testimonials.map((t, index) => (
            <div 
              key={t.id}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-4 z-0 pointer-events-none"
              }`}
            >
              <p className="font-heading text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-foreground italic mb-8">
                "{t.text}"
              </p>
              <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                — {t.author}
              </span>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-foreground" : "bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

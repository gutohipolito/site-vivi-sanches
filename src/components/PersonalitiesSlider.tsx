"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { personalities } from "@/constants/personalities";

export default function PersonalitiesSlider() {
  const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: true, direction: "backward" })
  ]);
  
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: true, direction: "forward" })
  ]);

  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi1) emblaApi1.scrollNext(); // Opposite direction for illusion
    if (emblaApi2) emblaApi2.scrollPrev();
  }, [emblaApi1, emblaApi2]);

  const scrollNext = useCallback(() => {
    if (emblaApi1) emblaApi1.scrollPrev();
    if (emblaApi2) emblaApi2.scrollNext();
  }, [emblaApi1, emblaApi2]);

  return (
    <div 
      className="relative w-full overflow-hidden group py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Side Gradients for fading effect */}
      <div className="absolute left-0 inset-y-0 w-16 md:w-48 bg-gradient-to-r from-deep-charcoal to-transparent z-30 pointer-events-none"></div>
      <div className="absolute right-0 inset-y-0 w-16 md:w-48 bg-gradient-to-l from-deep-charcoal to-transparent z-30 pointer-events-none"></div>

      <div className="space-y-6 md:space-y-8">
        {/* Row 1 */}
        <div className="overflow-hidden" ref={emblaRef1}>
          <div className="flex gap-4 md:gap-8 ml-4 md:ml-8">
            {personalities.slice(0, 16).map((img, i) => (
              <div key={`row1-${i}`} className="flex-none w-32 h-32 md:w-48 md:h-48 relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent-gold/50 transition-all duration-500 hover:scale-105 z-20 cursor-grab active:cursor-grabbing">
                <Image
                  src={`/images/clientes/${img}`}
                  alt="Cliente da Clínica Sanches"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden" ref={emblaRef2}>
          <div className="flex gap-4 md:gap-8 ml-4 md:ml-8">
            {personalities.slice(16).map((img, i) => (
               <div key={`row2-${i}`} className="flex-none w-32 h-32 md:w-48 md:h-48 relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent-gold/50 transition-all duration-500 hover:scale-105 z-20 cursor-grab active:cursor-grabbing">
                <Image
                  src={`/images/clientes/${img}`}
                  alt="Cliente da Clínica Sanches"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons (Appear on Hover) */}
      <div className={`absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-40 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={scrollPrev}
          className="p-3 md:p-4 rounded-full bg-deep-charcoal/80 text-accent-gold border border-accent-gold/20 hover:bg-accent-gold hover:text-white transition-all shadow-xl backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      
      <div className={`absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-40 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={scrollNext}
          className="p-3 md:p-4 rounded-full bg-deep-charcoal/80 text-accent-gold border border-accent-gold/20 hover:bg-accent-gold hover:text-white transition-all shadow-xl backdrop-blur-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

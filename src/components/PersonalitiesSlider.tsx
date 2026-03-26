"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { personalities } from "@/constants/personalities";

export default function PersonalitiesSlider() {
  // Speed reduced from 1.5 to 1.0 as requested
  const [emblaRef1] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 1.0, stopOnInteraction: false, stopOnMouseEnter: false, direction: "backward" })
  ]);
  
  const [emblaRef2] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 1.0, stopOnInteraction: false, stopOnMouseEnter: false, direction: "forward" })
  ]);

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Side Gradients for fading effect */}
      <div className="absolute left-0 inset-y-0 w-16 md:w-48 bg-gradient-to-r from-deep-charcoal to-transparent z-30 pointer-events-none"></div>
      <div className="absolute right-0 inset-y-0 w-16 md:w-48 bg-gradient-to-l from-deep-charcoal to-transparent z-30 pointer-events-none"></div>

      <div className="space-y-6 md:space-y-8">
        {/* Row 1 */}
        <div className="overflow-hidden" ref={emblaRef1}>
          {/* Embla container: Negative margin to offset slider padding */}
          <div className="flex -ml-4 md:-ml-8 touch-pan-y">
            {personalities.slice(0, 16).map((img, i) => (
              <div key={`row1-${i}`} className="flex-[0_0_auto] min-w-0 pl-4 md:pl-8">
                <div className="w-32 h-32 md:w-48 md:h-48 relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent-gold/50 transition-all duration-500 hover:scale-105 z-20 cursor-grab active:cursor-grabbing">
                  <Image
                    src={`/images/clientes/${img}`}
                    alt="Cliente da Clínica Sanches"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden" ref={emblaRef2}>
          <div className="flex -ml-4 md:-ml-8 touch-pan-y">
            {personalities.slice(16).map((img, i) => (
               <div key={`row2-${i}`} className="flex-[0_0_auto] min-w-0 pl-4 md:pl-8">
                <div className="w-32 h-32 md:w-48 md:h-48 relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent-gold/50 transition-all duration-500 hover:scale-105 z-20 cursor-grab active:cursor-grabbing">
                  <Image
                    src={`/images/clientes/${img}`}
                    alt="Cliente da Clínica Sanches"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

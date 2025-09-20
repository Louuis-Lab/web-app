"use client";
import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1501594907351-0c4c1d6d9e6b?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&h=600&fit=crop",
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start", 
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': {
          slidesToScroll: 2,
          dragFree: false
        }
      }
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="max-w-5xl mx-auto px-4 pt-2 pb-12" id="home">
      {/* Seção do logo + slogan */}
      <div className="flex flex-col items-center mt-4 mb-6">
        <Image 
          src="/big-logo.png" 
          alt="Logo" 
          width={200} 
          height={67} 
          className="mb-3"
        />
        <h1 className="text-xl font-bold text-center leading-tight">
          <span className="typing-animation">Onde a curiosidade encontra a ciência</span>
        </h1>
      </div>

      {/* Carrossel com botões reorganizados */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Botão Voltar (apenas desktop) */}
        <button
          onClick={scrollPrev}
          className="hidden md:flex w-4 h-4 items-center justify-center rounded-full bg-[#f53098] text-white shadow-md hover:shadow-lg transition-all"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-2 h-2" />
        </button>

        {/* Carrossel principal */}
        <div className="embla flex-1 w-full overflow-hidden mb-4 md:mb-0" ref={emblaRef}>
          <div className="embla__container flex gap-4 w-full">
            {images.map((src, index) => (
              <div 
                key={index} 
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] aspect-square"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Imagem ${index + 1}`}
                    fill
                    className="rounded-lg shadow-md hover:shadow-lg transition-shadow object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão Avançar (apenas desktop) */}
        <button
          onClick={scrollNext}
          className="hidden md:flex w-4 h-4 items-center justify-center rounded-full bg-[#f53098] text-white shadow-md hover:shadow-lg transition-all"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-2 h-2" />
        </button>
      </div>

      {/* CSS para typing animation infinita */}
      <style jsx>{`
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          border-right: 3px solid #f53098;
          animation: typing 2s steps(40, end) infinite alternate, blink 0.5s step-end infinite;
          white-space: nowrap;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink {
          50% { border-color: transparent; }
        }
      `}</style>
    </div>
  );
}
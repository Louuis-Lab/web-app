"use client";
import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1501594907351-0c4c1d6d9e6b?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&h=600&fit=crop",
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Seção do logo + slogan */}
      <div className="flex flex-col items-center mt-4 mb-8">
        <Image src="/big-logo.png" alt="Logo" width={300} height={100} className="mb-4" />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
          <span className="typing-animation">Onde a curiosidade encontra a ciência</span>
        </h1>
      </div>

      {/* Carrossel com botões */}
      <div className="flex items-center gap-2">
        {/* Botão Voltar */}
        <button
          onClick={scrollPrev}
          className="w-4 h-4 flex items-center justify-center rounded-full focus:outline-none"
          style={{ backgroundColor: "var(--pink)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-2 h-2 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Carrossel */}
        <div className="embla flex-1 overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-2">
            {images.map((src, index) => (
              <div key={index} className="embla__slide flex-shrink-0 w-20 sm:w-24 md:w-28">
                <div className="relative w-full h-20 sm:h-24 md:h-28">
                  <Image
                    src={src}
                    alt={`Imagem ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão Avançar */}
        <button
          onClick={scrollNext}
          className="w-4 h-4 flex items-center justify-center rounded-full focus:outline-none"
          style={{ backgroundColor: "var(--pink)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-2 h-2 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* CSS para typing animation infinita */}
      <style jsx>{`
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid var(--pink);
          animation: typing 4s steps(40, end) infinite alternate, blink 0.75s step-end infinite;
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

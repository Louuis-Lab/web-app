"use client";
import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import primeira from "@/public/hero/primeira.jpeg";
import terceira from "@/public/hero/terceira.jpeg";
import quarta from "@/public/hero/quarta.jpeg";
import quinta from "@/public/hero/quinta.jpeg";
import sexta from "@/public/hero/sexta.jpeg";

const images = [primeira,terceira, quarta, quinta, sexta];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": {
          slidesToScroll: 2,
          dragFree: false,
        },
      },
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="max-w-5xl mx-auto px-4 pt-2 pb-12" id="home">
      <div className="flex flex-col items-center mt-4 mb-6">
        <Image src="/big-logo.png" alt="Logo" width={200} height={67} className="mb-3" />
        <h1 className="text-xl font-bold text-center leading-tight">
          <span className="typing-animation">Onde a curiosidade encontra a ciência</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <button
          onClick={scrollPrev}
          className="hidden md:flex w-4 h-4 items-center justify-center rounded-full bg-[#f53098] text-white shadow-md hover:shadow-lg transition-all"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-2 h-2" />
        </button>

        <div className="embla flex-1 w-full overflow-hidden mb-4 md:mb-0" ref={emblaRef}>
          <div className="embla__container flex w-full -mx-2">
            {images.map((src, index) => (
              <div
                key={index}
                className="embla__slide px-2 flex-[0_0_100%] md:flex-[0_0_50%] aspect-square"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Imagem ${index + 1}`}
                    fill
                    sizes="(min-width: 768px) calc(50vw - 1rem), 100vw"
                    className="rounded-lg shadow-md hover:shadow-lg transition-shadow object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="hidden md:flex w-4 h-4 items-center justify-center rounded-full bg-[#f53098] text-white shadow-md hover:shadow-lg transition-all"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-2 h-2" />
        </button>
      </div>

      <style jsx>{`
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          border-right: 3px solid #f53098;
          animation: typing 2s steps(40, end) infinite alternate, blink 0.5s step-end infinite;
          white-space: nowrap;
        }
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </div>
  );
}
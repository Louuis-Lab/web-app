"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "@/app/globals.css";
import primeira from "@/public/hero/primeira.jpeg";
import terceira from "@/public/hero/terceira.jpeg";
import quarta from "@/public/hero/quarta.jpeg";
import quinta from "@/public/hero/quinta.jpeg";
import sexta from "@/public/hero/sexta.jpeg";

const images = [primeira, terceira, quarta, quinta, sexta];

export default function Hero() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-4 pb-10" id="home">
      
      {/* === Carrossel === */}
      <div className="embla overflow-hidden rounded-xl shadow-md mb-6" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] px-0"
              style={{ aspectRatio: "16 / 9", minWidth: "100%" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Imagem ${index + 1}`}
                  fill
                  className={`rounded-xl object-cover ${
                    index >= 3 ? "object-[center_40%]" : "object-center"
                  }`}
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Logo à esquerda, texto à direita === */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Image
            src="/big-logo.png"
            alt="Logo"
            width={300}
            height={150}
            className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] h-auto object-contain"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 id="where" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
            ONDE A CURIOSIDADE ENCONTRA A CIÊNCIA
          </h1>
        </div>
      </div>
    </div>
  );
}

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
  // emblaRef deve estar no container que tem overflow-hidden
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div id="home" className="w-full">
      {/* === Logo + Texto (permanece igual) === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-4 pb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex-1 flex justify-center md:justify-start">
            <Image
              src="/big-logo.png"
              alt="Logo"
              width={300}
              height={150}
              className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] h-auto object-contain"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1
              id="where"
              className="w-full text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight text-[#f53098] text-center"
            >
            ONDE A CURIOSIDADE ENCONTRA A CIÊNCIA
            </h1>

          </div>
        </div>
      </div>

      {/* === Carrossel full-bleed / imagens grudadas / infinito === */}
      <div className="w-screen overflow-hidden">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">

            {images.map((src, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_auto] w-[70vw] md:w-[40vw] lg:w-[33vw]"
                style={{ aspectRatio: "16 / 9" }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Imagem ${index + 1}`}
                    fill
                    className={`object-cover ${
                      index >= 3 ? "object-[center_40%]" : "object-center"
                    }`}
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}

            {/* DUPLICAÇÃO PARA LOOP REALMENTE SUAVE */}
            {images.map((src, index) => (
              <div
                key={`dup-${index}`}
                className="embla__slide flex-[0_0_auto] w-[70vw] md:w-[40vw] lg:w-[33vw]"
                style={{ aspectRatio: "16 / 9" }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Imagem duplicada ${index + 1}`}
                    fill
                    className={`object-cover ${
                      index >= 3 ? "object-[center_40%]" : "object-center"
                    }`}
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

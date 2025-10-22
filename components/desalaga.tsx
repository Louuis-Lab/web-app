"use client";
import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import primeira from "@/public/desalaga/primeira.jpeg";
import segunda from "@/public/desalaga/segunda.jpeg";
import terceira from "@/public/desalaga/terceira.jpeg";
import quarta from "@/public/desalaga/quarta.jpeg";
import quinta from "@/public/desalaga/quinta.jpeg";
import sexta from "@/public/desalaga/sexta.jpeg";
import setima from "@/public/desalaga/setima.jpeg";

const imagens = [primeira, segunda, terceira, quarta, quinta, sexta, setima];

export default function Desalaga() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": {
          slidesToScroll: 1,
          dragFree: false,
        },
      },
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="max-w-5xl mx-auto px-4 pt-6 pb-12 rounded-lg"
      style={{ 
        background: "linear-gradient(to bottom, #e0f0ff, #f9faff)" 
      }}
    >
      {/* TEXTO */}
      <div className="space-y-4 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center">
          Projeto <span className="text-blue-800">Desalaga</span>
        </h2>

        <p className="text-gray-700 text-base md:text-lg text-justify">
          <strong className="text-blue-700">Criado em:</strong> 2023 <br />
          <strong className="text-blue-700">Status:</strong> Ativo
        </p>

        <p className="text-gray-800 text-base md:text-lg text-justify">
          <strong className="text-blue-700">Estudantes Envolvidos - 1ª Fase:</strong> <br />
          BRUNA PRADO BRAGA COSTA; CAUAN BONJARDIM VAZ COSTA; LIA BRAGA TELES.
        </p>

        <p className="text-gray-800 text-base md:text-lg text-justify">
          <strong className="text-blue-700">Estudantes Envolvidos - 2ª Fase:</strong> <br />
          GRAZIELLE ARAÚJO CAVALCANTE; LUÍSA VASCONCELOS DE OLIVEIRA.
        </p>

        <p className="text-gray-800 text-base md:text-lg text-justify">
          <strong className="text-blue-700">Orientador:</strong> LOUIS FILLIP MAIA LINS SELVATTI <br />
          <strong className="text-blue-700">Coorientador:</strong> LUCAS CAVALCANTI
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mt-4 mb-2">Resumo</h3>
        <p className="text-gray-700 text-base md:text-lg text-justify"
           style={{ hyphens: "auto", WebkitHyphens: "auto", msHyphens: "auto", textWrap: "pretty" }}>
          O projeto socioambiental <strong className="text-blue-700">Desalaga</strong> promove a mitigação
          dos danos oriundos das fortes chuvas, estruturando-se em três pilares:
          prever, alertar e solucionar. Para a previsão, é desenvolvido um
          aplicativo que fornecerá informações climáticas, pluviométricas e
          alertas de alagamentos, além de promover parcerias com administrações
          municipais e capacitar alunos de escolas públicas para mapeamento de
          suas áreas. No aspecto de alerta, o aplicativo contará com bueiros
          inteligentes que emitem notificações de alagamentos, complementadas por
          avisos de usuários e alertas mais abrangentes via e-mail e SMS em
          situações de desastres naturais. Para a solução dos alagamentos, o
          projeto introduz o <strong className="text-blue-700">bueiro inteligente</strong>, constituído por
          uma tampa de bueiro, um sensor de volume de resíduos conectado ao
          aplicativo e uma cesta feita de plástico reciclado para coleta dos
          descartes. Além do bueiro, será usado o <strong className="text-blue-700">concreto permeável</strong>,
          que permite a passagem da água e mitiga os problemas causados pela
          impermeabilização urbana.
        </p>
      </div>

      {/* CARROSSEL DE IMAGENS */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <button
          onClick={scrollPrev}
          className="hidden md:flex w-6 h-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-md hover:shadow-lg transition-all"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-3 h-3" />
        </button>

        <div className="embla flex-1 w-full overflow-hidden mb-4 md:mb-0" ref={emblaRef}>
          <div className="embla__container flex w-full -mx-1">
            {imagens.map((img, index) => (
              <div
                key={index}
                className="embla__slide px-1 flex-[0_0_50%] aspect-square"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`Imagem ${index + 1}`}
                    fill
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
          className="hidden md:flex w-6 h-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-md hover:shadow-lg transition-all"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

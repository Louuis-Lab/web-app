"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import primeira from "@/public/desalaga/primeira.jpeg";
import segunda from "@/public/desalaga/segunda.jpeg";
import terceira from "@/public/desalaga/terceira.jpeg";
import quarta from "@/public/desalaga/quarta.jpeg";
import quinta from "@/public/desalaga/quinta.jpeg";
import sexta from "@/public/desalaga/sexta.jpeg";
import setima from "@/public/desalaga/setima.jpeg";

const imagens = [primeira, segunda, terceira, quarta, quinta, sexta, setima];

export default function Desalaga() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div
      className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6"
      style={{ backgroundColor: "#38abd1", borderRadius: "1rem" }}
    >
      {/* === Caixa de texto branca === */}
      <div className="bg-white rounded-lg p-4 md:p-6 mb-6">
        <h2 id="where" className="text-3xl md:text-4xl font-bold text-[#38abd1] mb-2">
          Projeto <span className="text-[#38abd1]">Desalaga</span>
        </h2>

        <p className="text-gray-800 text-base md:text-lg mt-2">
          <strong>Criado em:</strong> 2023 <br />
          <strong>Status:</strong> Ativo
        </p>

        <p className="text-gray-800 text-base md:text-lg mt-2">
          <strong>Estudantes Envolvidos - 1ª Fase:</strong> <br />
          BRUNA PRADO BRAGA COSTA; CAUAN BONJARDIM VAZ COSTA; LIA BRAGA TELES.
        </p>

        <p className="text-gray-800 text-base md:text-lg mt-2">
          <strong>Estudantes Envolvidos - 2ª Fase:</strong> <br />
          GRAZIELLE ARAÚJO CAVALCANTE; LUÍSA VASCONCELOS DE OLIVEIRA.
        </p>

        <p className="text-gray-800 text-base md:text-lg mt-2">
          <strong>Orientador:</strong> LOUIS FILLIP MAIA LINS SELVATTI <br />
          <strong>Coorientador:</strong> LUCAS CAVALCANTI <span className="text-[#38abd1]">(2º FASE)</span>
        </p>

        <h3 className="text-2xl font-semibold text-[#38abd1] mt-4 mb-2">Resumo</h3>
        <p className="text-gray-800 text-base md:text-lg text-justify">
          O projeto socioambiental <strong className="text-[#38abd1]">Desalaga</strong> promove a mitigação
          dos danos oriundos das fortes chuvas, estruturando-se em três pilares: prever, alertar e solucionar.
          Para a previsão, é desenvolvido um aplicativo que fornecerá informações climáticas, pluviométricas e
          alertas de alagamentos. No aspecto de alerta, o aplicativo contará com bueiros inteligentes que
          emitem notificações de alagamentos. Para a solução, o projeto introduz o{" "}
          <strong className="text-[#38abd1]">bueiro inteligente</strong>
          {" "}e o uso do{" "}
          <strong className="text-[#38abd1]">concreto permeável</strong>.
        </p>

        {/* === Novo bloco de Premiações === */}
        <h3 className="text-2xl font-semibold text-[#38abd1] mt-6 mb-3">
          Premiações e Reconhecimento
        </h3>

        <ul className="list-disc pl-6 text-gray-800 text-base md:text-lg space-y-2">
          <li>
            <strong>Desafio Liga Jovem</strong> – Organizado pelo SEBRAE, foi um dos projetos finalistas de Brasília em 2024.
          </li>
          <li>
            <strong>Hackathon do SEBRAE</strong> – Participou da capacitação de jovens empreendedores em 2024.
          </li>
          <li>
            <strong>Mundo Senai</strong> – Por três anos consecutivos (2023–2025), apresentou o projeto a estudantes do Senai e de escolas públicas.
          </li>
          <li>
            <strong>Semana Nacional de Ciências e Tecnologia</strong> – Por dois anos consecutivos (2024–2025), foi convidado pela SNCT a apresentar sua ideia na feira.
          </li>
          <li>
            <strong>CIRSOL</strong> – Convidado a expor o projeto na II Conferência Internacional de Resíduos Sólidos e Sanitários.
          </li>
        </ul>
      </div>

      {/* === Carrossel com fundo verde-água === */}
      <div className="embla overflow-hidden rounded-xl shadow-md" ref={emblaRef}>
        <div className="embla__container flex">
          {imagens.map((src, index) => (
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
                    index > 3 ? "object-[center_30%]" : "object-center"
                  }`}
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

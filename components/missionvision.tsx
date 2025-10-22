import React from "react";
import Image from "next/image";
import segunda from "@/public/hero/segunda.jpeg";

const MissaoVisao: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gray-50" lang="pt-BR">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center md:text-left mb-8 md:mb-10 border-b-4 border-[#f53098] pb-3 md:pb-4 w-full">
          Missão & Visão
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-6 md:gap-12">
          {/* Texto (2/5) */}
          <div className="md:col-span-2 space-y-4 md:space-y-5">
            <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed text-justify tracking-normal">
              Nosso objetivo é <strong>inspirar e apoiar estudantes</strong> na criação de projetos científicos inovadores, oferecendo <strong>estrutura, mentoria e oportunidades</strong> para que suas ideias gerem impacto <strong>social, ambiental e tecnológico</strong>.
            </p>
            <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed text-justify tracking-normal">
              A LoouisLab busca ser <strong>referência nacional</strong> em incubação de projetos estudantis, formando jovens <strong>protagonistas</strong> capazes de transformar a sociedade por meio da ciência.
            </p>
          </div>

          {/* Imagem (3/5) */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 mx-auto md:mx-0 aspect-square">
              <Image
                src={segunda}
                alt="Estudantes desenvolvendo projeto científico"
                fill
                className="object-cover rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissaoVisao;

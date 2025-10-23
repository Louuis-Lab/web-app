import React from "react";
import Image from "next/image";
import segunda from "@/public/hero/segunda.jpeg";

const MissaoVisao: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 md:py-10" lang="pt-BR">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center md:text-left mb-6 md:mb-8 border-b-4 border-[#f53098] pb-2 w-full">
          Missão & Visão
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 md:gap-6">
          {/* Texto (2 caixas, 2/5) */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-3 flex-1 shadow-lg flex items-center justify-center aspect-square">
              <p className="text-black text-sm md:text-base text-left">
                Nosso objetivo é <strong>inspirar e apoiar estudantes</strong> na criação de projetos científicos inovadores, oferecendo <strong>estrutura, mentoria e oportunidades</strong> para que suas ideias gerem impacto <strong>social, ambiental e tecnológico</strong>.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-3 flex-1 shadow-lg flex items-center justify-center aspect-square">
              <p className="text-black text-sm md:text-base text-left">
                A LoouisLab busca ser <strong>referência nacional</strong> em incubação de projetos estudantis, formando jovens <strong>protagonistas</strong> capazes de transformar a sociedade por meio da ciência.
              </p>
            </div>
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

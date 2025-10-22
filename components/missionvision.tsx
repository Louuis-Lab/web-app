import React from "react";
import Image from "next/image";
import segunda from "@/public/hero/segunda.jpeg";

const MissaoVisao: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" lang="pt-BR">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Título ocupando toda a largura */}
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center md:text-left mb-10 border-b-4 border-[#f53098] pb-4 w-full">
          Missão & Visão
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-8 md:gap-12">
          {/* Texto (2/5) */}
          <div className="md:col-span-2 space-y-5">
            <p
              className="text-black text-lg md:text-xl leading-relaxed text-justify"
              style={{
                hyphens: "auto",
                WebkitHyphens: "auto",
                msHyphens: "auto",
                textWrap: "pretty",
              }}
            >
              Nosso objetivo é <strong>inspirar e apoiar estudantes</strong> na
              criação de projetos científicos inovadores, oferecendo{" "}
              <strong>estrutura, mentoria e oportunidades</strong> para que suas
              ideias gerem impacto <strong>social, ambiental e tecnológico</strong>.
            </p>
            <p
              className="text-black text-lg md:text-xl leading-relaxed text-justify"
              style={{
                hyphens: "auto",
                WebkitHyphens: "auto",
                msHyphens: "auto",
                textWrap: "pretty",
              }}
            >
              A LoouisLab busca ser <strong>referência nacional</strong> em
              incubação de projetos estudantis, formando jovens{" "}
              <strong>protagonistas</strong> capazes de transformar a sociedade por
              meio da ciência.
            </p>
          </div>

          {/* Imagem (3/5) */}
          <div className="md:col-span-3">
            <div className="relative w-full h-72 md:h-[420px] lg:h-[500px]">
              <Image
                src={segunda}
                alt="Estudantes desenvolvendo projeto científico em laboratório"
                fill
                className="object-cover rounded-xl shadow-lg"
                placeholder="blur"
                sizes="(min-width: 1024px) 60vw, (min-width: 768px) 60vw, 100vw"
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

"use client";

import React from "react";
import Image from "next/image";

const Sobre: React.FC = () => {
  return (
    <section className="py-10 bg-white" id="sobre">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* BLOCO COM IMAGEM DE FUNDO + TÍTULO EM CIMA */}
        <div className="relative w-full flex justify-center mb-2">

          {/* === IMAGEM DE FUNDO === */}
          <Image
            src="/frame.png"
            alt="Frame rasgado"
            width={900}
            height={214}
            priority
            className="select-none"
          />

          {/* === TÍTULO EM CIMA DA IMAGEM === */}
          <h2
            id="where"
            className="
              absolute 
              top-1/2 
              left-1/2 
              -translate-x-1/2 
              -translate-y-1/2
              text-3xl md:text-5xl 
              font-bold 
              text-black 
              text-center
            "
          >
            Sobre a LoouisLab
          </h2>
        </div>

        {/* === TEXTO PRINCIPAL === */}
        <p className="text-black text-base sm:text-lg md:text-xl mb-4 leading-relaxed text-left md:text-justify">
          A <strong>LoouisLab</strong> é uma incubadora de projetos científicos fundada pelo professor{" "}
          <strong>Louis Fillip Maia Lins Selvatti</strong>, criada para transformar ideias em soluções reais
          para desafios da sociedade. Nasceu do desejo de oferecer um espaço onde jovens possam{" "}
          <strong>experimentar, errar, testar e inovar</strong>, em um ambiente colaborativo que conecta{" "}
          <strong>ciência, tecnologia e propósito</strong>. Aqui, projetos estudantis saem do papel e se tornam
          iniciativas transformadoras.
        </p>

        <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed text-left md:text-justify mb-8">
          O <strong>unicórnio</strong>, símbolo da nossa identidade visual, representa o{" "}
          <strong>extraordinário, o raro e o inovador</strong>. Cada estudante tem um potencial único de criar
          algo que ainda não existe — e a LoouisLab é o espaço onde essa{" "}
          <strong>imaginação encontra a ciência</strong> para se tornar realidade.
        </p>

        {/* === DOIS PARÁGRAFOS (MISSÃO E VISÃO) LADO A LADO === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <p className="text-black text-base md:text-lg leading-relaxed">
              Nosso objetivo é <strong>inspirar e apoiar estudantes</strong> na criação de projetos científicos 
              inovadores, oferecendo <strong>estrutura, mentoria e oportunidades</strong> para que suas ideias 
              gerem impacto <strong>social, ambiental e tecnológico</strong>.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <p className="text-black text-base md:text-lg leading-relaxed">
              A LoouisLab busca ser <strong>referência nacional</strong> em incubação de projetos estudantis, 
              formando jovens <strong>protagonistas</strong> capazes de transformar a sociedade por meio da ciência.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Sobre;

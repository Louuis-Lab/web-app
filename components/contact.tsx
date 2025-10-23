"use client";

import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <section
      id="contato"
      className="py-10 sm:py-12 md:py-16 px-4 md:px-8 bg-[#f53098] text-center text-white transition-all duration-300"
    >
      {/* Título ajustado */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
        Entre em Contato
      </h2>

      {/* Texto reduzido e mais compacto no mobile */}
      <p className="max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
        Ficou com alguma dúvida, ideia ou quer conversar sobre uma parceria?
        Ficaremos felizes em receber sua mensagem!<br />
        Aproveite também para conhecer os{" "}
        <Link
          href="/projetos"
          className="underline font-semibold text-white hover:text-black transition-colors duration-300"
        >
          projetos incríveis
        </Link>{" "}
        desenvolvidos pelos nossos estudantes — cada um é uma prova de
        criatividade e inovação dentro da{" "}
        <strong className="text-black">LoouisLab</strong>.
      </p>

      {/* Botões menores e com menos espaçamento vertical */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
        <a
          href="mailto:loouislab@outlook.com"
          className="bg-white text-black font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base md:text-lg shadow-sm"
        >
          Enviar e-mail
        </a>

        <Link
          href="/projetos"
          className="bg-transparent border-2 border-white text-white font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base md:text-lg shadow-sm"
        >
          Ver Projetos
        </Link>
      </div>

      {/* Texto final mais compacto */}
      <p className="mt-4 sm:mt-5 text-white/90 text-xs sm:text-sm md:text-base">
        ou envie diretamente para{" "}
        <a
          href="mailto:loouislab@outlook.com"
          className="text-black font-semibold hover:underline"
        >
          loouislab@outlook.com
        </a>
      </p>
    </section>
  );
};

export default Contact;

"use client";

import Link from "next/link";

export default function Projetos() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#fff] to-[#fef2f7] text-center">
      <div className="max-w-5xl mx-auto">
        {/* Título grande e destacado */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Conheça Nossos Projetos
        </h2>

        {/* Descrição breve e envolvente */}
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore os projetos criados por estudantes que estão transformando ideias em soluções reais.
          Descubra iniciativas científicas, tecnológicas e sociais que nasceram dentro da{" "}
          <strong className="text-[#f53098]">LoouisLab</strong>.
        </p>

        {/* Botão de chamada para ação */}
        <div className="flex justify-center">
          <Link
            href="/projetos"
            className="inline-block bg-[#f53098] text-white font-semibold py-3 px-8 rounded-lg text-lg md:text-xl hover:bg-[#e81c8c] transition-all duration-300 shadow-md hover:shadow-lg mx-auto"
          >
            Ver Projetos
          </Link>
        </div>

      </div>
    </section>
  );
}

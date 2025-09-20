import React from 'react';

const MissaoVisao: React.FC = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Missão & Visão</h2>
        <p className="text-black text-lg md:text-xl mb-4 leading-relaxed">
          Nosso objetivo é <strong>inspirar e apoiar estudantes</strong> na criação de projetos científicos inovadores, oferecendo <strong>estrutura, mentoria e oportunidades</strong> para que suas ideias gerem impacto <strong>social, ambiental e tecnológico</strong>.
        </p>
        <p className="text-black text-lg md:text-xl leading-relaxed">
          A LoouisLab busca ser <strong>referência nacional</strong> em incubação de projetos estudantis, formando jovens <strong>protagonistas</strong> capazes de transformar a sociedade por meio da ciência.
        </p>
      </div>
    </section>
  );
};

export default MissaoVisao;
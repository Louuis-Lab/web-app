import React from 'react';

const MissaoVisao: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Missão & Visão</h2>
        <p className="text-gray-700 text-lg md:text-xl mb-4">
          Nosso objetivo é <strong>inspirar e apoiar estudantes</strong> na criação de projetos científicos inovadores, oferecendo <strong>estrutura, mentoria e oportunidades</strong> para que suas ideias gerem impacto <strong>social, ambiental e tecnológico</strong>.
        </p>
        <p className="text-gray-700 text-lg md:text-xl">
          A LoouisLab busca ser <strong>referência nacional</strong> em incubação de projetos estudantis, formando jovens <strong>protagonistas</strong> capazes de transformar a sociedade por meio da ciência.
        </p>
      </div>
    </section>
  );
};

export default MissaoVisao;

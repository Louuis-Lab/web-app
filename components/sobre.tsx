import React from 'react';

const Sobre: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre a LoouisLab</h2>
        <p className="text-gray-700 text-lg md:text-xl mb-4">
          A <strong>LoouisLab</strong> é uma incubadora de projetos científicos fundada pelo professor <strong>Louis Fillip Maia Lins Selvatti</strong>, criada para transformar ideias em soluções reais para desafios da sociedade. Nasceu do desejo de oferecer um espaço onde jovens possam <strong>experimentar, errar, testar e inovar</strong>, em um ambiente colaborativo que conecta <strong>ciência, tecnologia e propósito</strong>. Aqui, projetos estudantis saem do papel e se tornam iniciativas transformadoras.
        </p>
        <p className="text-gray-700 text-lg md:text-xl">
          O <strong>unicórnio</strong>, símbolo da nossa identidade visual, representa o <strong>extraordinário, o raro e o inovador</strong>. Cada estudante tem um potencial único de criar algo que ainda não existe — e a LoouisLab é o espaço onde essa <strong>imaginação encontra a ciência</strong> para se tornar realidade.
        </p>
      </div>
    </section>
  );
};

export default Sobre;

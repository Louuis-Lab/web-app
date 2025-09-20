import React from 'react';

const Values: React.FC = () => {
  const valores = [
    { titulo: 'Inovação', descricao: 'Estimular soluções criativas para problemas reais.' },
    { titulo: 'Colaboração', descricao: 'Acreditar que o conhecimento cresce quando compartilhado.' },
    { titulo: 'Diversidade', descricao: 'Valorizar diferentes olhares, origens e experiências.' },
    { titulo: 'Responsabilidade social', descricao: 'Colocar a ciência a serviço da comunidade.' },
    { titulo: 'Propósito', descricao: 'Trabalhar sempre com impacto positivo em mente.' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valores.map((valor) => (
            <div key={valor.titulo} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{valor.titulo}</h3>
              <p className="text-gray-700">{valor.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

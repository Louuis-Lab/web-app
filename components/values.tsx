import React from 'react';
import { Sparkles, Users, Users2, HeartHandshake, Target } from 'lucide-react';

const Values: React.FC = () => {
  const valores = [
    { 
      titulo: 'Inovação', 
      descricao: 'Estimular soluções criativas para problemas reais.',
      icon: <Sparkles className="w-4 h-4 text-[#f53098]" />
    },
    { 
      titulo: 'Colaboração', 
      descricao: 'Acreditar que o conhecimento cresce quando compartilhado.',
      icon: <Users className="w-4 h-4 text-[#f53098]" />
    },
    { 
      titulo: 'Diversidade', 
      descricao: 'Valorizar diferentes olhares, origens e experiências.',
      icon: <Users2 className="w-4 h-4 text-[#f53098]" />
    },
    { 
      titulo: 'Responsabilidade social', 
      descricao: 'Colocar a ciência a serviço da comunidade.',
      icon: <HeartHandshake className="w-4 h-4 text-[#f53098]" />
    },
    { 
      titulo: 'Propósito', 
      descricao: 'Trabalhar sempre com impacto positivo em mente.',
      icon: <Target className="w-4 h-4 text-[#f53098]" />
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 text-center">Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {valores.map((valor) => (
            <div 
              key={valor.titulo} 
              className="aspect-square bg-white rounded-2xl border-4 border-[#f53098] shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center justify-center text-center"
            >
              <div className="mb-2">{valor.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-1">{valor.titulo}</h3>
              <p className="text-gray-700 text-sm">{valor.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
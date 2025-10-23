import React from 'react';
import { Sparkles, Users, Users2, HeartHandshake, Target } from 'lucide-react';

const Values: React.FC = () => {
  const valores = [
    { titulo: 'Inovação', icon: <Sparkles className="w-4 h-4 text-[#f53098]" /> },
    { titulo: 'Colaboração', icon: <Users className="w-4 h-4 text-[#f53098]" /> },
    { titulo: 'Diversidade', icon: <Users2 className="w-4 h-4 text-[#f53098]" /> },
    { titulo: 'Responsabilidade social', icon: <HeartHandshake className="w-4 h-4 text-[#f53098]" /> },
    { titulo: 'Propósito', icon: <Target className="w-4 h-4 text-[#f53098]" /> },
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">Valores</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 justify-items-center">
          {valores.map((valor) => (
            <div
              key={valor.titulo}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 bg-white rounded-full border-2 border-[#f53098] shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center"
            >
              {valor.icon}
              <h3 className="text-[0.45rem] sm:text-[0.55rem] md:text-[0.65rem] font-bold mt-1 text-black">
                {valor.titulo}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

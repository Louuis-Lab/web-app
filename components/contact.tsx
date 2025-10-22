"use client";

const Contact: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 text-center" id="contato">
      {/* Título ajustado para o mesmo tamanho da seção Missão & Visão */}
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
        Entre em Contato
      </h2>

      <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
        Ficou com alguma dúvida, ideia ou quer conversar sobre uma parceria?
        Ficaremos felizes em receber sua mensagem!
      </p>

      <a
        href="mailto:loouislab@outlook.com"
        className="inline-block bg-[#f53098] text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-[#e81c8c] transition-all duration-300 text-base md:text-lg shadow-sm"
      >
        Enviar e-mail
      </a>

      <p className="mt-5 text-gray-600 text-sm md:text-base">
        ou envie diretamente para{" "}
        <a
          href="mailto:loouislab@outlook.com"
          className="text-[#f53098] font-medium hover:underline"
        >
          loouislab@outlook.com
        </a>
      </p>
    </section>
  );
};

export default Contact;

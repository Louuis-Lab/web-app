"use client";

import React from "react";

const valores = [
  {
    titulo: "INOVAÇÃO",
    texto:
      "Na LoouisLab, a inovação é o impulso que move cada etapa do processo de criação científica. Valorizamos a capacidade de imaginar soluções inéditas para problemas reais, incentivando nossos estudantes a explorarem novas tecnologias, metodologias e formas de pensar. A inovação se manifesta nos protótipos desenvolvidos, nas perguntas que fazemos e na liberdade que damos aos alunos para experimentarem, testarem e reconstruírem suas ideias. Aqui, inovar é mais do que criar algo novo: é transformar curiosidade em impacto.",
  },
  {
    titulo: "COLABORAÇÃO",
    texto:
      "Acreditamos que grandes ideias surgem quando mentes diferentes se encontram. Por isso, a colaboração é um dos pilares da LoouisLab. Nossos projetos são desenvolvidos em equipes, nas quais a troca de saberes, as discussões construtivas e o apoio mútuo fortalecem tanto o processo quanto o resultado final. A presença de professores orientadores, parceiros institucionais e outros estudantes amplia ainda mais essa rede colaborativa, criando um ambiente em que aprender com o outro é parte essencial da experiência científica.",
  },
  {
    titulo: "INCLUSÃO",
    texto:
      "A LoouisLab é um espaço em que cada estudante encontra condições reais para participar ativamente da ciência, independentemente de suas habilidades, ritmos de aprendizagem ou necessidades específicas. Trabalhamos com práticas pedagógicas inclusivas, garantindo que todos tenham acesso às ferramentas, orientações e adaptações necessárias para desenvolver seus projetos. Inclusão, para nós, significa assegurar que nenhum talento ou perspectiva seja deixado de fora do processo de criação.",
  },
  {
    titulo: "DIVERSIDADE",
    texto:
      "A diversidade fortalece a ciência. Na LoouisLab, valorizamos a pluralidade de vivências, histórias, interesses e referenciais culturais que cada aluno traz consigo. Acreditamos que projetos mais completos e relevantes surgem quando diferentes olhares se encontram. Por isso, estimulamos a construção de pesquisas que dialoguem com múltiplas realidades e problemáticas sociais, reconhecendo a riqueza que cada estudante adiciona ao processo científico.",
  },
  {
    titulo: "RESPONSABILIDADE SOCIAL",
    texto:
      "Toda pesquisa na LoouisLab nasce de uma inquietação diante de questões que atravessam a sociedade. Por isso, a responsabilidade social orienta nossas escolhas metodológicas, nossos temas de investigação e a forma como devolvemos conhecimento para a comunidade. Incentivamos nossos alunos a compreenderem o impacto ético e social de seus projetos, refletindo sobre como suas soluções podem melhorar vidas, promover sustentabilidade e gerar transformação real.",
  },
  {
    titulo: "PROPÓSITO",
    texto:
      "O propósito é o que dá sentido a cada projeto desenvolvido na LoouisLab. Mais do que cumprir etapas ou produzir resultados, buscamos que cada estudante encontre uma razão genuína para sua investigação científica, conectando suas experiências, interesses e valores pessoais ao problema que deseja resolver. Esse alinhamento fortalece o engajamento, a autonomia e a maturidade acadêmica, tornando a LoouisLab um ambiente onde fazer ciência é também construir significado.",
  },
];

const Values: React.FC = () => {
return (
<section className="pt-4 pb-8 md:pt-6 md:pb-12 px-2 md:px-4">
{/* TÍTULO COM CAIXA */}
<div className="flex justify-center mb-8">
<div className="bg-white border-2 border-[#f53098] shadow-md px-6 py-2">
<h2 id="where" className="text-4xl font-bold text-center text-[#f53098] tracking-wide">
VALORES
</h2>
</div>
</div>


<div className="flex flex-col gap-3 max-w-7xl mx-auto w-full">
{valores.map((item, index) => (
<div
key={item.titulo}
className={`flex flex-col md:flex-row items-stretch justify-between gap-3 ${
index % 2 === 1 ? "md:flex-row-reverse" : ""
}`}
>
{/* BLOCO TÍTULO */}
<div className="w-full md:w-[26%] flex">
<div
className="bg-white border-2 border-[#f53098] shadow-md p-2 md:p-3 w-full flex items-center justify-center h-auto md:h-28"
>
<p id="where" className="font-bold text-xl md:text-2xl tracking-wide text-[#f53098] text-center">
{item.titulo}
</p>
</div>
</div>


{/* BLOCO TEXTO */}
<div className="w-full md:w-[74%] flex">
<div
className="bg-white border-2 border-[#f53098] shadow-md p-3 md:p-4 w-full flex items-center h-auto md:h-28"
>
<p className="text-base md:text-lg font-semibold leading-relaxed text-black">
{item.texto}
</p>
</div>
</div>
</div>
))}
</div>
</section>
);
};


export default Values;
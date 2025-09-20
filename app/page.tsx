import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Sobre from "@/components/sobre";
import MissionVision from "@/components/missionvision";
import Values from "@/components/values";
import { Suspense } from "react";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <div></div>
      <main className="text-2xl" >
        <Hero />
        <Sobre />
        <MissionVision />
        <Values />
        <Suspense fallback={<div className="py-16 text-center">Carregando contato...</div>}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

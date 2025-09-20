import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Mission from "@/components/mission";
import History from "@/components/our-history";
import Unicorn from "@/components/unicorn";
import Values from "@/components/values";
import Vision from "@/components/vision";
import Hero from "@/components/hero";
import { Suspense } from "react";
import AboutUs from "@/components/about-us";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-4 text-2xl ">
        <Hero/>
        <section>
          <AboutUs/>
          <Mission />
          <Vision />
          <Values />  
        </section>
        <section>
          <History />
          <Unicorn />
        </section>
        <Suspense fallback={<div>Carregando contato...</div>}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
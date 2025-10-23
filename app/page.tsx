import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Sobre from "@/components/sobre";
import ContactProjects from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <div></div>
      <main className="text-2xl" >
        <Hero />
        <Sobre />

        <ContactProjects />
      </main>
      <Footer />
    </>
  );
}

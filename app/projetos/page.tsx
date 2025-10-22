import Header from "@/components/header";
import Footer from "@/components/footer";
import Desalaga from "@/components/desalaga";

export default function Projetos() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 px-2 md:px-4 py-6 md:py-8">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
            Projetos
          </h1>

          <Desalaga />
        </section>
      </main>

      <Footer />
    </div>
  );
}

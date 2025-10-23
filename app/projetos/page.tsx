import Header from "@/components/header";
import Footer from "@/components/footer";
import Desalaga from "@/components/desalaga";

export default function Projetos() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 px-2 sm:px-4 md:px-6 py-4">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 text-center">
            Projetos
          </h1>

          <Desalaga />
        </section>
      </main>

      <Footer />
    </div>
  );
}

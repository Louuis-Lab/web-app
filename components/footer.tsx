"use client";

import Image from "next/image";
import { FaInstagram } from 'react-icons/fa6';
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  // Função para navegação
  const goToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      router.push('/'); // volta para a raiz
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-white text-black py-6">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo clicável */}
          <div className="flex-shrink-0">
            <button onClick={() => goToSection('home')} className="cursor-pointer">
              <Image
                src="/small-logo.png"
                alt="Logo pequena"
                width={180}
                height={63}
                className="w-[140px] sm:w-[160px] md:w-[180px] h-auto"
              />
            </button>
          </div>

          {/* Links de navegação */}
          <nav className="flex flex-col items-center gap-2 text-base font-bold">
            <button 
              onClick={() => goToSection('home')} 
              className="hover:text-gray-600 transition-colors py-1"
            >
              Home
            </button>
          </nav>

          {/* Instagram */}
          <div className="flex items-center">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-600 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-black/20 text-center text-xs">
          <p>© {new Date().getFullYear()} LoouisLab. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

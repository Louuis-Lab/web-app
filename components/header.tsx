"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para rolar até a seção com animação
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      // Para home, vai para o topo suavemente
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 flex justify-between items-center px-4 md:px-6 py-0.20 md:py-0.10 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <button onClick={() => scrollToSection('home')} className="cursor-pointer">
        <Image
          src="/big-logo.png"
          alt="Logo grande"
          width={150}
          height={25}
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] h-auto"
        />
      </button>
      <nav className="hidden md:flex space-x-1 lg:space-x-2 text-black text-sm lg:text-base font-bold">
        <button 
          onClick={() => scrollToSection('home')} 
          className="hover:text-gray-700 transition-all duration-300 transform hover:scale-105 px-2 py-1"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('sobre')} 
          className="hover:text-gray-700 transition-all duration-300 transform hover:scale-105 px-2 py-1"
        >
          Sobre
        </button>
        <button 
          onClick={() => scrollToSection('contato')} 
          className="hover:text-gray-700 transition-all duration-300 transform hover:scale-105 px-2 py-1"
        >
          Contato
        </button>
      </nav>
      <Image
        src="/small-logo.png"
        alt="Logo pequena"
        width={200}
        height={35}
        className="hidden md:block w-[70px] md:w-[80px] lg:w-[90px] h-auto"
      />
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col justify-center items-center space-y-1 p-2"
        aria-label="Menu"
      >
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
      </button>
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="flex flex-col py-4 animate-slideDown">
            <button 
              onClick={() => scrollToSection('home')} 
              className="px-6 py-3 text-black hover:bg-gray-50 transition-all duration-300 font-bold text-left w-full hover:pl-8"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="px-6 py-3 text-black hover:bg-gray-50 transition-all duration-300 font-bold text-left w-full hover:pl-8"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="px-6 py-3 text-black hover:bg-gray-50 transition-all duration-300 font-bold text-left w-full hover:pl-8"
            >
              Contato
            </button>
            <div className="px-6 py-3 border-t border-gray-100">
              <Image
                src="/small-logo.png"
                alt="Logo pequena"
                width={200}
                height={25}
                className="w-[60px] h-auto"
              />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
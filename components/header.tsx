"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) element.scrollIntoView({ behavior: "smooth" });
      setScrollTarget(null);
    }
  }, [scrollTarget]);

  const goToSection = (idOrUrl: string) => {
    if (idOrUrl === "sobre") {
      setScrollTarget("sobre"); // seta o alvo para scroll
    } else if (idOrUrl === "contato") {
      const element = document.getElementById("contato");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else if (idOrUrl === "projetos") {
      router.push("/projetos");
    } else if (idOrUrl === "home") {
      router.push("/");
    } else if (idOrUrl === "valores") {
      router.push("/valores");
    }

    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Sobre", id: "sobre" },
    { label: "Contato", id: "contato" },
    { label: "Valores", id: "valores" },
    { label: "Projetos", id: "projetos" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 flex justify-between items-center px-3 sm:px-4 md:px-6 py-1 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {/* Logo */}
      <button onClick={() => goToSection("home")} className="cursor-pointer">
        <Image
          src="/big-logo.png"
          alt="Logo grande"
          width={75}
          height={75}
          className="block md:hidden w-[70px] h-[70px] rounded-full object-cover"
        />
        <Image
          src="/small-logo.png"
          alt="Logo pequena"
          width={90}
          height={30}
          className="hidden md:block w-[70px] h-auto"
        />
      </button>

      {/* Navegação desktop */}
      <nav className="hidden md:flex space-x-2 text-black text-sm font-semibold">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => goToSection(item.id)}
            className="hover:text-gray-700 transition-all duration-300 transform hover:scale-105 px-2 py-1"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Botão menu mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col justify-center items-center p-2 space-y-[5px]"
        aria-label="Menu"
      >
        <span
          className={`block w-4 h-[1.5px] bg-black rounded transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-[5px]" : ""
          }`}
        />
        <span
          className={`block w-4 h-[1.5px] bg-black rounded transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-4 h-[1.5px] bg-black rounded transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
          }`}
        />
      </button>

      {/* Menu mobile aberto */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="flex flex-col py-3 animate-slideDown font-semibold">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className="px-6 py-3 text-black hover:bg-gray-50 transition-all duration-300 text-left w-full hover:pl-8"
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 py-3 border-t border-gray-100 flex justify-center">
              <Image
                src="/big-logo.png"
                alt="Logo grande"
                width={75}
                height={75}
                className="w-[70px] h-[70px] rounded-full object-cover"
              />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

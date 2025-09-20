import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-3 py-2 bg-white">
      
      <Image
        src="/big-logo.png"
        alt="Logo grande"
        width={200}
        height={30}
        className="sm:w-[130px] md:w-[150px] lg:w-[170px] h-auto"
      />
      <nav className="flex space-x-3 sm:space-x-5 text-gray-600 text-xs sm:text-sm md:text-base">
        <a href="#" className="hover:text-gray-900">
          Home
        </a>
        <a href="#" className="hover:text-gray-900">
          About
        </a>
        <a href="#" className="hover:text-gray-900">
          Services
        </a>
        <a href="#" className="hover:text-gray-900">
          Contact
        </a>
      </nav>

      {/* Logo pequena (maior que antes) */}
      <Image
        src="/small-logo.png"
        alt="Logo pequena"
        width={200}
        height={70}
        className="sm:w-[90px] md:w-[110px] lg:w-[120px] h-auto"
      />
    </header>
  );
}

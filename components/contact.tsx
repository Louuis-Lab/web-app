"use client";

import { useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // Verificar se a resposta é JSON
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await res.json();
        if (res.ok) {
          setStatus("Mensagem enviada com sucesso!");
          setForm({ name: "", email: "", message: "" });
        } else {
          setStatus(data.message || "Erro ao enviar mensagem");
        }
      } else {
        // Se não for JSON, provavelmente é uma página de erro
        setStatus("Erro no servidor. Por favor, tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setStatus("Erro de conexão. Por favor, verifique sua internet e tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-8 px-4 md:px-6 bg-gray-50" id="contato">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-black">Contato</h2>
      <form onSubmit={handleSubmit} className="max-w-md md:max-w-lg mx-auto space-y-4">
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder=" "
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#f53098] bg-transparent text-sm"
            required
          />
          <label className="absolute left-0 top-3 text-sm text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#f53098]">
            Nome
          </label>
        </div>
        
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder=" "
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#f53098] bg-transparent text-sm"
            required
          />
          <label className="absolute left-0 top-3 text-sm text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#f53098]">
            Email
          </label>
        </div>
        
        <div className="relative">
          <textarea
            name="message"
            placeholder=" "
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#f53098] bg-transparent text-sm min-h-[100px]"
            required
          />
          <label className="absolute left-0 top-3 text-sm text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#f53098]">
            Mensagem
          </label>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#f53098] text-white text-sm py-3 rounded-lg hover:bg-[#e81c8c] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? "Enviando..." : "Enviar Mensagem"}
        </button>
        
        {status && (
          <p className={`text-center mt-2 text-sm font-medium ${
            status.includes("sucesso") ? "text-green-600" : "text-red-600"
          }`}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
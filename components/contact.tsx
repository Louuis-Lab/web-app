"use client";

import { useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Mensagem enviada!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Erro ao enviar");
      }
    } catch (error) {
      console.error(error);
      setStatus("Erro ao enviar");
    }
  };

  return (
    <section className="py-6 px-4 md:px-6 bg-gray-50" id="contato">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-black">Contato</h2>
      <form onSubmit={handleSubmit} className="max-w-md md:max-w-lg mx-auto space-y-3">
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder=" "
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#f53098] bg-transparent text-sm"
            required
          />
          <label className="absolute left-0 top-0 text-xs text-gray-500 transition-all duration-200 pointer-events-none">
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
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#f53098] bg-transparent text-sm"
            required
          />
          <label className="absolute left-0 top-0 text-xs text-gray-500 transition-all duration-200 pointer-events-none">
            Email
          </label>
        </div>
        
        <div className="relative">
          <textarea
            name="message"
            placeholder=" "
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#f53098] bg-transparent text-sm"
            rows={3}
            required
          />
          <label className="absolute left-0 top-0 text-xs text-gray-500 transition-all duration-200 pointer-events-none">
            Mensagem
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#f53098] text-white text-sm py-2 rounded-lg hover:bg-[#e81c8c] transition-all duration-300"
        >
          Enviar Mensagem
        </button>
        
        {status && (
          <p className={`text-center mt-2 text-sm ${
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
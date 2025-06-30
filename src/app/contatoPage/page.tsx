"use client";

import { Mail } from "lucide-react";

function ContatoPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-blue-600 flex justify-center items-center gap-4">
          <Mail size={28} /> Entre em contacto
        </h1>
        <p className="text-gray-600 text-base max-w-xl mx-auto">
          Tem alguma dúvida, sugestão ou quer colaborar com o FreelaFlow?
          Preencha o formulário abaixo e responderemos o mais breve possível.
        </p>
      </div>

      <form className="bg-white p-6 rounded-xl shadow-md space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="nome" className="text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              required
              className="mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              placeholder="Seu nome completo"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="mensagem"
            className="text-sm font-medium text-gray-700"
          >
            Mensagem
          </label>
          <textarea
            id="mensagem"
            rows={5}
            required
            className="mt-1 px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="Escreva sua mensagem aqui..."
          ></textarea>
        </div>

        <div className="text-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Enviar mensagem
          </button>
        </div>
      </form>

      <div className="text-center text-sm text-gray-500 pt-4 border-t">
        Este formulário é apenas demonstrativo. Em breve será conectado a um
        serviço real.
      </div>
    </section>
  );
}

export default ContatoPage;

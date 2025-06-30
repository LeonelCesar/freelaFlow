"use client";

import { Briefcase, PieChart, Clock } from "lucide-react";

 function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-12 bg-gray-100">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4 tracking-tight">
          FlowTracker
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A plataforma definitiva para freelancers que querem{" "}
          <strong>gerir seus projetos, finanças e tarefas</strong> com
          excelência.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <Briefcase className="w-10 h-10 text-blue-500 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            Projetos
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Centralize todos os seus projetos, acompanhe o progresso e nunca
            perca um prazo.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <PieChart className="w-10 h-10 text-green-500 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            Finanças
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Tenha controle total sobre suas entradas e saídas com dashboards
            visuais e precisos.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <Clock className="w-10 h-10 text-purple-500 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            Tarefas
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Crie, organize e conclua tarefas com eficiência, mantendo sua rotina
            sob controle.
          </p>
        </div>
      </section>

      <div className="mt-12">
        <a
          href="/dashboardPage"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Começar agora
        </a>
      </div>
    </main>
  );
}

export default Home; 

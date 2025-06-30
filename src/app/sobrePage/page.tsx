"use client";

import Image from "next/image";
import Link from "next/link";
import Image1 from './../../img/img-png.jpg';

function SobrePage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-blue-600">Sobre o FlowTracker</h1>

      <p className="text-gray-700 text-lg leading-relaxed">
        O <strong>FlowTracker</strong> é uma aplicação moderna desenvolvida para
        apoiar freelancers na gestão de <strong>projetos, finanças e tarefas</strong> de forma prática,
        eficiente e profissional. Com uma interface intuitiva e responsiva,
        a plataforma proporciona mais <strong>organização, produtividade e foco</strong> no dia a dia de quem trabalha por conta própria.
      </p>

      <div className="flex justify-center pb-4">
        <Image
          src={Image1} 
          alt="Time a trabalhar"
          width={500}
          height={300}
          className="rounded-xl"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-500">🚀 Missão</h2>
          <p className="text-gray-600 text-sm">
            Empoderar freelancers com soluções digitais que otimizem o tempo,
            aumentem a produtividade e simplifiquem a gestão do trabalho
            independente.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-500">🎯 Visão</h2>
          <p className="text-gray-600 text-sm">
            Ser a principal ferramenta para freelancers que desejam crescer com autonomia,
            conquistar clientes e assumir o controle total de suas atividades.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-500">💡 Tecnologias</h2>
          <p className="text-gray-600 text-sm">
            Desenvolvido com <strong>React</strong>, <strong>Next.js</strong>, <strong>Zustand</strong>,{" "}
            <strong>Tailwind CSS</strong> e <strong>TypeScript</strong>, priorizando performance,
            escalabilidade e uma excelente experiência de uso.
          </p>
        </div>
      </div>

    
      <div className="bg-gray-100 p-6 rounded-xl shadow text-center">
        <p className="text-gray-700 italic text-base">
          “O FlowTracker transformou minha rotina como freelancer. Hoje sou mais produtivo,
          organizado e consigo focar no que realmente importa: entregar valor aos meus clientes.”
        </p>
        <span className="block mt-4 text-sm font-semibold text-gray-600">– Usuário Satisfeito</span>
      </div>

      {/* Call-to-action */}
      <div className="text-center pt-6">
        <p className="text-gray-700 mb-4">
          Quer transformar a sua forma de trabalhar como freelancer?
        </p>
        <Link
          href="/contatoPage"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Entrar em contacto
        </Link>
      </div>

      <p className="text-gray-600 text-sm text-center pt-8 border-t">
        Criado com dedicação por um desenvolvedor apaixonado por liberdade,
        autonomia e tecnologia.
      </p>
    </section>
  );
}

export default SobrePage;


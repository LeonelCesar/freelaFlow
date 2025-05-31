function SobrePage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-blue-600">Sobre o FlowTracker</h1>

      <p className="text-gray-700 text-lg leading-relaxed">
        O <strong>FlowTracker</strong> é uma aplicação moderna criada para
        ajudar freelancers a gerirem seus{" "}
        <strong>projetos, finanças e tarefas</strong> de forma simples,
        eficiente e profissional. Desenvolvida com as melhores práticas do
        mercado, a plataforma oferece uma interface intuitiva e responsiva para
        quem busca foco, organização e produtividade no dia a dia.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-500">
            🚀 Missão
          </h2>
          <p className="text-gray-600 text-sm">
            Empoderar freelancers com ferramentas digitais que otimizem tempo,
            aumentem a produtividade e simplifiquem a gestão do seu trabalho
            independente.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-500">
            🎯 Visão
          </h2>
          <p className="text-gray-600 text-sm">
            Tornar-se a principal solução para freelancers que desejam crescer,
            conquistar clientes e ter total controle sobre suas atividades.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-500">
            💡 Tecnologias
          </h2>
          <p className="text-gray-600 text-sm">
            Construído com <strong>React</strong>, <strong>Next.js</strong>,{" "}
            <strong>Zustand</strong>,<strong>Tailwind CSS</strong> e{" "}
            <strong>TypeScript</strong>, visando performance, escalabilidade e
            excelente experiência de usuário.
          </p>
        </div>
      </div>

      <p className="text-gray-600 text-sm text-center pt-4 border-t">
        Criado com dedicação por um desenvolvedor apaixonado por liberdade,
        autonomia e tecnologia.
      </p>
    </section>
  );
}

export default SobrePage;

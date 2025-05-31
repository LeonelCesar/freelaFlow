 import { Briefcase, PieChart, Clock } from 'lucide-react'
 
 function Home() {
  return (
     <main className="flex flex-col gap-12 items-center justify-center py-4 px-4 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-2 text-blue-600">FlowTracker</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Gerencie seus projetos, finanças e tarefas como um verdadeiro freelancer profissional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <Briefcase className="w-10 h-10 text-blue-500 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2">Projetos</h2>
          <p className="text-sm text-gray-500">
            Organize e acompanhe todos os seus projetos em um só lugar.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <PieChart className="w-10 h-10 text-green-500 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2">Finanças</h2>
          <p className="text-sm text-gray-500">
            Visualize receitas, despesas e mantenha seu fluxo de caixa saudável.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <Clock className="w-10 h-10 text-purple-500 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2">Tarefas</h2>
          <p className="text-sm text-gray-500">
            Gerencie seu tempo com uma lista de tarefas eficiente e intuitiva.
          </p>
        </div>
      </div>

      <a
        href="/dashboardPage"
        className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        Acessar Dashboard
      </a>
    </main>
  );
}

export default Home; 

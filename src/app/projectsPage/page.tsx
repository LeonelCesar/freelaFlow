function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-blue-600">Gerencie seus Projetos com Eficiência</h1>

      <p className="text-gray-700 text-lg leading-relaxed">
        O módulo de <strong>Projetos</strong> do <strong>FlowTracker</strong> foi desenvolvido para dar
        autonomia total ao freelancer. Com ele, é possível criar, visualizar e acompanhar o progresso
        de cada projeto com clareza e foco.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-500">📁 Organização</h2>
          <p className="text-gray-600 text-sm">
            Cada projeto possui um painel próprio com nome, descrição, status, prazo e cliente.
            Tudo num só lugar, com acesso rápido e interface clara.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-500">📊 Progresso Visual</h2>
          <p className="text-gray-600 text-sm">
            Acompanhe o andamento dos seus projetos com indicadores visuais,
            listas de tarefas e status em tempo real.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-500">🔗 Integração</h2>
          <p className="text-gray-600 text-sm">
            Os projetos se conectam com finanças, clientes e tarefas automaticamente,
            criando um fluxo de trabalho inteligente e sem repetições manuais.
          </p>
        </div>
      </div>

      <p className="text-gray-600 text-sm text-center pt-4 border-t">
        Crie projetos ilimitados, mantenha o foco no que importa e entregue resultados com mais agilidade.
      </p>
    </section>
  )
}

export default ProjectsPage;
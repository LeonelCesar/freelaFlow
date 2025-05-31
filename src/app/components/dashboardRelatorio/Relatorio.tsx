// --- app/dashboard/relatorios/page.tsx ---
'use client'

import { BarChart2, FileText, CalendarDays } from 'lucide-react'

export default function RelatoriosPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Relatórios</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <BarChart2 className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="text-lg font-semibold mb-1">Resumo Financeiro</h3>
          <p className="text-sm text-gray-500">
            Acompanhe gráficos de receitas, despesas e balanço geral.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <FileText className="w-8 h-8 text-green-600 mb-3" />
          <h3 className="text-lg font-semibold mb-1">Relatórios de Projetos</h3>
          <p className="text-sm text-gray-500">
            Veja métricas de performance e tempo dedicado por projeto.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <CalendarDays className="w-8 h-8 text-purple-600 mb-3" />
          <h3 className="text-lg font-semibold mb-1">Produtividade Mensal</h3>
          <p className="text-sm text-gray-500">
            Análise detalhada do tempo investido em tarefas ao longo do mês.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-400 mt-6">
        Em breve: exportar relatórios em PDF, filtros por data e muito mais!
      </p>
    </section>
  )
}

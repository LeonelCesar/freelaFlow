'use client';

import { Briefcase, DollarSign, ListChecks } from 'lucide-react';
import ResumoTabela from '../components/dashboardResumo/Resumo';

type Stat = {
  icon: React.ReactElement;
  label: string;
  value: string | number;
};

const stats: Stat[] = [
  {
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    label: 'Projetos ativos',
    value: 5,
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    label: 'Receita Mensal',
    value: '€ 3.250',
  },
  {
    icon: <ListChecks className="w-6 h-6 text-purple-600" />,
    label: 'Tarefas pendentes',
    value: 2,
  },
];

 function Dashboard() {
  return (
    <section className="space-y-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold">Painel Principal</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-2xl shadow flex items-center gap-4"
          >
            {stat.icon}
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <ResumoTabela />
    </section>
  );
}

export default Dashboard;

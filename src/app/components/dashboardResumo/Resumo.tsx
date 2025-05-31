'use client';

const dadosMock = [
  { id: 'PRJ001', nome: 'Landing Page', status: 'Concluído', valor: '€ 1.850' },
  { id: 'PRJ002', nome: 'App Mobile', status: 'Em Andamento', valor: '€ 2.200' },
  { id: 'PRJ003', nome: 'E-commerce', status: 'Atrasado', valor: '€ 4.800' },
];

const statusColor = {
  'Concluído': 'bg-green-100 text-green-800',
  'Em Andamento': 'bg-yellow-100 text-yellow-800',
  'Atrasado': 'bg-red-100 text-red-800',
};

function ResumoTabela() {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Últimos Projetos</h3>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 font-medium">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Projeto</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dadosMock.map((projeto) => (
              <tr key={projeto.id}>
                <td className="px-4 py-3">{projeto.id}</td>
                <td className="px-4 py-3">{projeto.nome}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColor[projeto.status]}`}>
                    {projeto.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">{projeto.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResumoTabela;

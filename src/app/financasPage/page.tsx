'use client';

import Relatorio from '@/app/components/dashboardRelatorio/Relatorio';

function FinancasPage() {
  return (
      <section className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Finanças</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Receita Total</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">€ 8.400</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Despesas</h3>
          <p className="text-2xl font-bold text-red-500 mt-2">€ 3.100</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Balanço</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">€ 5.300</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Transações Recentes</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-2">Data</th>
                <th className="text-left p-2">Descrição</th>
                <th className="text-left p-2">Categoria</th>
                <th className="text-right p-2">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">2025-05-27</td>
                <td className="p-2">Projeto Website</td>
                <td className="p-2">Receita</td>
                <td className="p-2 text-right text-green-600 font-semibold">€ 2.500</td>
              </tr>
              <tr>
                <td className="p-2">2025-05-25</td>
                <td className="p-2">Compra de domínio</td>
                <td className="p-2">Despesa</td>
                <td className="p-2 text-right text-red-500 font-semibold">€ 15</td>
              </tr>
              <tr>
                <td className="p-2">2025-05-23</td>
                <td className="p-2">Projeto Mobile App</td>
                <td className="p-2">Receita</td>
                <td className="p-2 text-right text-green-600 font-semibold">€ 3.200</td>
              </tr>
              <tr>
                <td className="p-2">2025-05-22</td>
                <td className="p-2">Licença Figma</td>
                <td className="p-2">Despesa</td>
                <td className="p-2 text-right text-red-500 font-semibold">€ 120</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Relatorio />
    </section>
  );
}

export default FinancasPage;

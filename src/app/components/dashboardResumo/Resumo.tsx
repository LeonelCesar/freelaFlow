'use client';

const dadosMock = [
  { id: "PRJ001", nome: "Landing Page", status: "Concluído", valor: "€ 1.850" },
  { id: "PRJ002", nome: "App Mobile", status: "Em Andamento", valor: "€ 2.200" },
  { id: "PRJ003", nome: "E-commerce", status: "Atrasado", valor: "€ 4.800" },
];

const statusColor: Record<string, string> = {
  Concluído: "bg-green-100 text-green-700",
  "Em Andamento": "bg-yellow-100 text-yellow-700",
  Atrasado: "bg-red-100 text-red-700",
};

 function ResumoTabela() {
  return (
    <section className="mt-10">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Últimos Projetos</h3>

      <div className="overflow-x-auto rounded-xl shadow border border-gray-100">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wide">
            <tr>
              <th className="px-5 py-3 text-left">ID</th>
              <th className="px-5 py-3 text-left">Projeto</th>
              <th className="px-5 py-3 text-left">Status</th>
              <th className="px-5 py-3 text-right">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {dadosMock.map((projeto) => (
              <tr key={projeto.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3 font-medium text-gray-800">{projeto.id}</td>
                <td className="px-5 py-3 text-gray-700">{projeto.nome}</td>
                <td className="px-5 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold inline-block ${statusColor[projeto.status]}`}
                  >
                    {projeto.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-right font-semibold text-gray-800">{projeto.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


export default ResumoTabela;

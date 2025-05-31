function ConfiguracaoPage() {
  return (
     <section className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-blue-600">Personalize a sua experiência</h1>

      <p className="text-gray-700 text-lg leading-relaxed">
        No <strong>FlowTracker</strong>, as <strong>Definições</strong> oferecem total controle sobre a sua
        conta, preferências visuais e funcionamento da plataforma. Tudo foi pensado para se adaptar a você.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">🎨 Tema e Aparência</h2>
          <p className="text-gray-600 text-sm">
            Altere entre modo claro e escuro, escolha cores principais e personalize a aparência do painel
            para combinar com o seu estilo de trabalho.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-green-600 mb-2">🔒 Segurança e Sessões</h2>
          <p className="text-gray-600 text-sm">
            Gerencie sessões ativas, atualize sua senha com facilidade e veja notificações de login.
            Sua conta, seus dados, sua segurança.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">🌐 Preferências Globais</h2>
          <p className="text-gray-600 text-sm">
            Selecione moeda padrão, idioma da interface e configurações gerais para tarefas,
            finanças e tempo. Tudo do seu jeito.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-red-500 mb-2">⚠️ Zona de Risco</h2>
          <p className="text-gray-600 text-sm">
            Exclua sua conta permanentemente, redefina todo o sistema ou exporte seus dados
            com segurança. Com liberdade vem responsabilidade.
          </p>
        </div>
      </div>

      <p className="text-gray-500 text-sm text-center pt-4 border-t">
        O FlowTracker é seu. Ajuste cada detalhe para tornar sua rotina mais leve e produtiva.
      </p>
    </section>
  );
}

export default ConfiguracaoPage;

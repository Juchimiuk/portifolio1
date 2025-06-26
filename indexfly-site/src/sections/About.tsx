import React from 'react';

export const AboutSection: React.FC = () => (
  <section id="ebook" className="bg-gradient-to-b from-sky-100 via-white to-blue-50 py-12">
    <div className="max-w-7xl flex flex-col lg:flex-row items-center gap-10 container mx-auto px-4">
      {/* Imagem do E-book */}
      <div className="w-full lg:w-2/5 flex justify-center mb-8 lg:mb-0">
        <div className="bg-white bg-opacity-80 rounded-xl shadow-md p-4 flex items-center justify-center">
          <img
            src="helicopterscreen2.png"
            alt="Capa do e-book IndexFly"
            className="w-40 sm:w-56 md:w-full h-auto shadow rounded-lg"
          />
        </div>
      </div>

      {/* Livro Financeiro e Funcionalidades */}
      <div className="w-full lg:w-3/5 lg:pr-6 bg-white bg-opacity-80 rounded-xl shadow-md p-6">
        <h2
          className="text-xl sm:text-2xl font-bold text-center lg:text-left text-sky-900 mb-6 uppercase tracking-wide drop-shadow-lg"
        >
          Livro Financeiro & Gestão de Aeronaves
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              num: '01',
              title: 'Modo Voo Simplificado',
              desc:
                'Gerencie seus voos com apenas 4 botões. Visualize cada etapa, do acionamento ao corte do motor, para uma operação precisa.',
            },
            {
              num: '02',
              title: 'Rascunho Inteligente',
              desc:
                'Edite e corrija registros de voo. Ajuste automaticamente dados de GPS e outras informações capturadas.',
            },
            {
              num: '03',
              title: 'Diário de Bordo Organizado',
              desc:
                'Registre suas experiências de voo em um diário estruturado. Gere e imprima versões personalizadas com todos os detalhes.',
            },
            {
              num: '04',
              title: 'Controles Avançados',
              desc:
                'Monitore voos por sócio ou cliente, acompanhe consumo médio de combustível e tempos totais de voo.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row p-4 bg-blue-50 rounded-xl shadow hover:shadow-md transition-transform"
            >
              <div className="flex-shrink-0 mb-2 sm:mb-0">
                <span className="text-sky-600 font-md text-xl">
                  {item.num}
                </span>
              </div>
              <div className="sm:ml-3">
                <h3 className="text-base sm:text-lg font-bold text-sky-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

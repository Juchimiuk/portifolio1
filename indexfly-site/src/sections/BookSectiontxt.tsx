import React from 'react';

export const BookSection: React.FC = () => (
  <section id="ebook" className="bg-white py-10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
      {/* Texto e CTA */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 mb-4">
          LIVRO FINANCEIRO E GESTÃO DE AERONAVES
        </h2>
        <div className="space-y-6 text-gray-700 mb-6">
          <p>
            Nossa solução destaca-se primordialmente pelo seu abrangente livro financeiro, uma ferramenta essencial para a gestão meticulosa e detalhada de operações aéreas. Este módulo centraliza contratos, a administração financeira e o controle de gastos, facilitando uma visão clara e atualizada das finanças. Com ele, é possível realizar o rateio de despesas de maneira eficiente entre sócios, respeitando as cotas de cada um e garantindo transparência total.
          </p>
          <p>
            As funcionalidades são desenhadas para proporcionar não apenas conformidade e controle, mas também para permitir uma gestão em tempo real, adaptando-se dinamicamente às necessidades específicas de cada operação.
          </p>
          <p>
            O aplicativo complementar de gestão de voos, que integra organizações do diário de bordo, é mais um recurso que reflete nosso compromisso com a eficiência operacional e a excelência no serviço. Juntos, estes sistemas formam uma solução robusta que transforma a complexidade das operações aéreas em uma gestão simplificada e altamente eficaz.
          </p>
        </div>
      </div>
      {/* Imagem do Livro */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="livro.png"
          alt="Capa do e-book IndexFly"
          className="w-64 sm:w-72 md:w-84 h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  </section>
);

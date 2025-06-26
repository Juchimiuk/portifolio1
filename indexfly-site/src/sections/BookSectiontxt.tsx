import React from 'react';

export const BookSection: React.FC = () => (
  <section id="ebook" className="relative py-20 bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800 overflow-hidden">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 gap-12">
      {/* Texto à esquerda */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left z-10">
        <span className="uppercase tracking-widest text-sky-200 text-xs font-semibold mb-4">Livro financeiro</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          Gestão financeira detalhada e transparente
        </h1>
        <h2 className="text-xl md:text-2xl text-sky-100 font-semibold mb-6 max-w-xl">
          Controle total das finanças, contratos e operações aéreas em um só lugar.
        </h2>
        <ul className="mb-8 space-y-3 max-w-xl">
          <li className="flex items-start gap-2">
            <span className="inline-block w-2 h-2 mt-2 rounded-full bg-sky-300"></span>
            <span className="text-white/90 text-base leading-relaxed">Centralize contratos, administração financeira e controle de gastos.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-block w-2 h-2 mt-2 rounded-full bg-sky-300"></span>
            <span className="text-white/90 text-base leading-relaxed">Rateio eficiente de despesas entre sócios, com transparência total.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-block w-2 h-2 mt-2 rounded-full bg-sky-300"></span>
            <span className="text-white/90 text-base leading-relaxed">Gestão em tempo real, adaptável a cada operação.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-block w-2 h-2 mt-2 rounded-full bg-sky-300"></span>
            <span className="text-white/90 text-base leading-relaxed">Integração com diário de bordo e controle de voos.</span>
          </li>
        </ul>
        <div className="space-y-7 text-gray-100 mb-6 text-justify text-base">
          <p>
            Nossa solução destaca-se primordialmente pelo seu abrangente livro financeiro, uma ferramenta essencial para a gestão <b>meticulosa e detalhada</b> de operações aéreas. Este módulo centraliza contratos, a administração financeira e o controle de gastos, facilitando uma visão clara e atualizada das finanças. Com ele, é possível realizar o rateio de despesas de maneira eficiente entre sócios, respeitando as cotas de cada um e garantindo <b>transparência total.</b>
          </p>
          <p>
            As funcionalidades são desenhadas para proporcionar não apenas conformidade e controle, mas também para permitir uma gestão em <b>tempo real</b>, adaptando-se dinamicamente às necessidades específicas de cada operação.
          </p>
          <p>
            O aplicativo complementar de gestão de voos, que integra organizações do diário de bordo, é mais um recurso que reflete nosso compromisso com a eficiência operacional e a excelência no serviço. Juntos, estes sistemas formam uma solução robusta que transforma a complexidade das operações aéreas em uma gestão simplificada e altamente <b>eficaz.</b>
          </p>
        </div>
      </div>
      {/* Imagem à direita */}
      <div className="w-full lg:w-2/5 flex justify-center items-center z-10">
        <img
          src="livro.png"
          alt="Capa do e-book IndexFly"
          className="w-64 sm:w-80 md:w-full h-auto shadow-none border-none bg-transparent rounded-none"
          style={{boxShadow:'none', border:'none', borderRadius: 0}}
        />
      </div>
      {/* Efeito decorativo de fundo */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] bg-white/10 rounded-full blur-2xl z-0" />
    </div>
  </section>
);

export default BookSection;

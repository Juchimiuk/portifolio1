import React from 'react';

const ScreenSection: React.FC = () => (
  <section id="screen" className="relative py-20 bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800 overflow-hidden">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 gap-12">
      {/* Texto à esquerda */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left z-10">
        <span className="uppercase tracking-widest text-sky-200 text-xs font-semibold mb-4">Gestão inteligente</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          Gestão de aeronaves simples, moderna e eficiente
        </h1>
        <h2 className="text-xl md:text-2xl text-sky-100 font-semibold mb-6 max-w-xl">
          Transforme a experiência de voo e a administração da sua frota com tecnologia de ponta, controle total e praticidade.
        </h2>
        <ul className="mb-8 space-y-3 max-w-xl">
          <li className="flex items-start gap-2">
            <span className="inline-block w-2 h-2 mt-2 rounded-full bg-sky-300"></span>
            <span className="text-white/90 text-base leading-relaxed">Controle completo de voos e utilização por sócios ou usuários.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-block w-2 h-2 mt-2 rounded-full bg-sky-300"></span>
            <span className="text-white/90 text-base leading-relaxed">Relatórios detalhados e personalizados para transparência e gestão.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-block w-2 h-2 mt-2 rounded-full bg-sky-300"></span>
            <span className="text-white/90 text-base leading-relaxed">Ideal para aeronaves compartilhadas ou de controle individualizado.</span>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#how-it-works"
            className="inline-block bg-white text-sky-900 font-bold px-6 py-2 rounded-full shadow-lg hover:bg-sky-900 hover:text-white transition text-base"
            onClick={e => {
              e.preventDefault();
              const section = document.getElementById('how-it-works');
              if (section) {
                const y = section.getBoundingClientRect().top + window.scrollY - 64;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Saiba mais...
          </a>
        </div>
      </div>
      {/* Imagem à direita */}
      <div className="w-full lg:w-1/2 flex justify-center items-center z-10">
        <img
          src="telaComputerG.png"
          alt="Tela do sistema IndexFly"
          className="w-full max-w-[520px] object-contain bg-transparent rounded-none shadow-none border-none"
          style={{ background: 'none', border: 'none', boxShadow: 'none' }}
        />
      </div>
    </div>
    {/* Efeito decorativo de fundo */}
    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl z-0" />
    <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-white/10 rounded-full blur-2xl z-0" />
  </section>
);

export default ScreenSection;

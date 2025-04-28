import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { FeaturesSection } from './sections/FeaturesSection';
import { WorkflowSection } from './sections/WorkflowSection';
import { PartnersSection } from './sections/PartnersSection';
import ScreenSection from './sections/ScreenSections';


const HomePage: React.FC = () => {
  return (
    <div className=''>
      <Header />
      <main className="pt-16">
        {/* Seção principal com imagem de fundo */}
        <section className="relative h-screen bg-[url('bgsky.png')] bg-cover bg-center">
          {/* Overlay escuro para melhorar legibilidade */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="flex flex-col md:flex-row justify-center items-center text-4xl md:text-6xl font-bold text-white mb-4">
              Bem-vindo ao
              <img className="w-65 h-fit pt-4 md:w-65 md:pt-0" src="indexfly.png" alt="" />
            </h1>
            <p className="text-sm md:text-lg text-white mb-1 mx-4 md:mx-28">
              No coração do nosso serviço está o compromisso de simplificar a gestão de operação aérea de aeronaves executivas e compartilhadas, oferecendo uma experiência intuitiva e fácil de usar.
            </p>
            <a
              href="#features"
              className="px-6 py-2 md:px-10 md:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm md:text-base"
            >
              Saiba Mais
            </a>
          </div>
        </section>
        {/* Seção de funcionalidades */}
        <FeaturesSection />
        <PartnersSection />
        <ScreenSection />
        <WorkflowSection />        
      </main>
      <Footer />
    </div>

  );
};

export default HomePage;

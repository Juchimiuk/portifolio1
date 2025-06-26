// src/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="scroll-mt-16 relative h-screen bg-[url('bgsky.png')] bg-cover bg-center flex items-center justify-center overflow-x-hidden overflow-y-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/80 via-sky-800/70 to-sky-700/60 opacity-80" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase drop-shadow-lg">
          Seja bem-vindo
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8 font-medium drop-shadow-md">
          Simplificamos a gestão de operação aérea de aeronaves executivas e
          compartilhadas, oferecendo uma experiência intuitiva, moderna e fácil de
          usar.
        </p>
        <a
          href="#features"
          className="inline-block bg-white text-sky-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-sky-900 hover:text-white transition text-lg"
          onClick={e => {
            e.preventDefault();
            const section = document.getElementById('features');
            if (section) {
              const y = section.getBoundingClientRect().top + window.scrollY - 64;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
        >
          Conheça nossas ferramentas de gestão
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

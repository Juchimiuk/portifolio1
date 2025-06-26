import React from 'react';
// src/index.tsx ou pages/_app.tsx
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { FeaturesSection } from './sections/FeaturesSection';
import { WorkflowSection } from './sections/WorkflowSection';
import ScreenSection from './sections/ScreenSections';
import { BookSection } from './sections/BookSectiontxt';
import HomeSection from './sections/HomeSection';
import ContactSection from './sections/contact';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden hide-scrollbar overflow-y-auto bg-[#f4f6f9]">
      <Header />

      <main className="pt-16">
        {/* Hero / Home */}
        <HomeSection />

        {/* Funcionalidades */}
        <FeaturesSection />

        {/* Tela */}
        <ScreenSection />

        {/* Como Funciona */}
        <WorkflowSection />

        {/* E-book / Livro */}
        <BookSection />
        {/* Seção em branco entre BookSection e Contato */}
        <section className="h-10 bg-transparent" aria-hidden="true"></section>
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

import React from 'react';
// src/index.tsx ou pages/_app.tsx
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { FeaturesSection } from './sections/FeaturesSection';
import { WorkflowSection } from './sections/WorkflowSection';
import { PartnersSection } from './sections/PartnersSection';
import ScreenSection from './sections/ScreenSections';
import { BookSection } from './sections/BookSectiontxt';
import HomeSection from './sections/HomeSection';
import BookImgSection from './sections/BookSections';
import ContactSection from './sections/contact';
import { AboutSection } from './sections/about';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden hide-scrollbar overflow-y-auto">
      <Header />

      <main className="pt-16">
        {/* Hero / Home */}
        <HomeSection />

        {/* Funcionalidades */}
        <FeaturesSection />

        {/* Tela */}
        <ScreenSection />

        {/* Parceiros */}
        <PartnersSection />

        {/* Como Funciona */}
        <WorkflowSection />

        <BookImgSection />

        {/* E-book / Livro */}
        <BookSection />

        <AboutSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

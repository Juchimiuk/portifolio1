import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import Background from './components/Background';
import HomeSection from './sections/HomeSection';
import ProjectsSection from './sections/FeaturesSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Fundo único, atrás de todas as sections */}
      <Background />

      <div className="relative z-10">
        <Header />
        <main>
          <HomeSection />
          <ProjectsSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      <SplashScreen />
    </div>
  );
};

export default HomePage;

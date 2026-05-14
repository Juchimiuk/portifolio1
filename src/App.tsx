import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import HomeSection from './sections/HomeSection';
import ProjectsSection from './sections/FeaturesSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';

const HomePage: React.FC = () => {
  const [, setSplashDone] = useState(false);

  return (
    <div className="bg-[#111] min-h-screen">
      <Header />
      <main>
        <HomeSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />

      <SplashScreen onFinish={() => setSplashDone(true)} />
    </div>
  );
};

export default HomePage;

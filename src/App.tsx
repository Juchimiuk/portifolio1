import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './sections/HomeSection';
import ProjectsSection from './sections/FeaturesSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <HomeSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

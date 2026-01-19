import React from 'react';
// src/index.tsx ou pages/_app.tsx
import './index.css';
import Footer from './components/Footer';
import ProjectsSection from './sections/FeaturesSection';

import HomeSection from './sections/HomeSection';

const HomePage: React.FC = () => {
  return (
    <div className="">
      {/* <Header /> */}

      <main className="">
        {/* Hero / Home */}
        <HomeSection />

        {/* Funcionalidades */}
        <ProjectsSection  />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

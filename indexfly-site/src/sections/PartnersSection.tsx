// src/components/PartnersSection.tsx
import React from 'react';

const partners = [
  'LogoLeo.png',
  'AgustaLogo.png',
  'logoindexadm.png',
  '/images/logos/boeing.svg',
 
];

export const PartnersSection: React.FC = () => (
  <section id="partners" className="py-10 h-fit bg-sky-950">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center text-white mb-12">Parceiros & Certificações</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
        {partners.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition">
            <img src={logo} alt={`Parceiro ${idx + 1}`} className="max-h-12 object-contain mix-blend-multiply" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

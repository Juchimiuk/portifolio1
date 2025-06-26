// src/components/PartnersSection.tsx
import React from 'react';

const partners = [
  'LogoLeo.png',
  'AgustaLogo.png',
  'logoindexadm.png',
  '/images/logos/boeing.svg',
];

export const PartnersSection: React.FC = () => (
  <section id="partners" className="py-0">
    <div className="w-full bg-gradient-to-r from-sky-900 via-sky-800 to-blue-700 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-extrabold text-center text-white mb-6 tracking-widest uppercase letter-spacing-[0.15em]">Parceiros & Certificações</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20 items-center">
          {partners.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-xl shadow flex flex-col items-center justify-center p-3 md:p-4 min-w-[90px] min-h-[60px] mx-2"
              style={{ backdropFilter: 'blur(1.5px)' }}
            >
              <img
                src={logo}
                alt={`Parceiro ${idx + 1}`}
                className="max-h-10 object-contain mix-blend-multiply"
                style={{ maxWidth: '70px', width: 'auto', height: '40px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

import React from 'react';
import { motion } from 'framer-motion';

const ScreenSection: React.FC = () => (
  <section id="screen" className="bg-[#f5f5f5] py-16 pt-2">
    <div className="container mx-auto px- flex flex-col lg:flex-row items-center gap-12">


      {/* Texto animado */}
      <motion.div
        className="w-full pl-10
         lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
          Inovação e Segurança
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          A IndexFly oferece o que há de melhor em inovação para uma experiência de voo superior. Sinta-se confortável e seguro todos os dias, em qualquer lugar.
        </p>
      </motion.div>

      {/* Imagem animada */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="telaComputerG.png"
          alt="Tela do sistema IndexFly"
          className="w-full sm: md:w-full lg:max-w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </motion.div>
    </div>
  </section>
);

export default ScreenSection;

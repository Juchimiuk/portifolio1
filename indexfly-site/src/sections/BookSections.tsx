import React from 'react';
import { motion } from 'framer-motion';


const BookImgSection: React.FC = () => (
  <section id="screen" className="bg-[#efedeb]  py-16">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

      {/* Imagem animada */}
      

      {/* Texto animado */}
      <motion.div
        className="lg:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-sky-900 mb-4">
          ksdaksdbaksa KASdjK
        </h2>
        <p className="text-gray-600 mb-6">
          A IndexFly oferece o que há de melhor em inovação para uma experiência de voo superior. Sinta-se confortável e seguro todos os dias, em qualquer lugar.
        </p>
        <motion.a
          href="#features"
          className="inline-block border-2 border-sky-900 rounded-l-full rounded-tr-full px-8 py-3 text-sky-900 font-medium hover:bg-gray-100 transition"
          whileHover={{ backgroundColor: '#e2e8f0', scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          Ver mais
        </motion.a>
      </motion.div>
      <motion.div
        className="lg:w-1/2 flex justify-center mb-8 lg:mb-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="book1.png"
          alt="Tela do sistema IndexFly"
          className="w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </motion.div>

    </div>
  </section>
);

export default BookImgSection;

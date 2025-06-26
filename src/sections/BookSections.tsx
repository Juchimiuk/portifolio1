import React from 'react';
import { motion } from 'framer-motion';


const Book: React.FC = () => (
  <section id="screen" className="bg-[#efedeb] py-2">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-12">

      {/* Texto animado - agora na parte superior */}
      <motion.div
        className="w-full flex flex-col justify-start text-left lg:text-left order-1 lg:order-1"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-sky-900 mb-4 mt-8">
          Livro Financeiro & Gestão de Aeronaves
        </h2>
        <p className="text-gray-600 mb-6">
          A IndexFly oferece o que há de melhor em inovação para uma experiência de voo superior. Sinta-se confortável e seguro todos os dias, em qualquer lugar.
        </p>
      </motion.div>

      {/* Imagem animada */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 order-2 lg:order-2"
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

export default Book;

import { motion } from 'framer-motion';
import React from 'react';

export const AboutSection: React.FC = () => (
  <section id="ebook" className="bg-white ">
    <div className="max-w-7xl  flex flex-col lg:flex-row items-center gap-12">
      {/* Imagem do E-book */}
      <motion.div
        className="w-full lg:w-2/5 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="helicopterscreen2.png"
          alt="Capa do e-book IndexFly"
          className="w-64 sm:w-80 md:w-full h-auto shadow-lg"
        />
      </motion.div>

      {/* Livro Financeiro e Funcionalidades */}
      <div className="w-full lg:w-3/5 lg:pr-10">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center lg:text-left text-sky-900 mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Livro Financeiro & Gestão de Aeronaves
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              num: '01',
              title: 'Modo Voo Simplificado',
              desc:
                'Gerencie seus voos com apenas 4 botões. Visualize cada etapa, do acionamento ao corte do motor, para uma operação precisa.',
            },
            {
              num: '02',
              title: 'Rascunho Inteligente',
              desc:
                'Edite e corrija registros de voo. Ajuste automaticamente dados de GPS e outras informações capturadas.',
            },
            {
              num: '03',
              title: 'Diário de Bordo Organizado',
              desc:
                'Registre suas experiências de voo em um diário estruturado. Gere e imprima versões personalizadas com todos os detalhes.',
            },
            {
              num: '04',
              title: 'Controles Avançados',
              desc:
                'Monitore voos por sócio ou cliente, acompanhe consumo médio de combustível e tempos totais de voo.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col sm:flex-row p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-transform"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: 'spring', stiffness: 100, damping: 16 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex-shrink-0 mb-4 sm:mb-0">
                <span className="text-sky-600 font-md text-3xl">
                  {item.num}
                </span>
              </div>
              <div className="sm:ml-4">
                <h3 className="text-lg sm:text-xl font-bold text-sky-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

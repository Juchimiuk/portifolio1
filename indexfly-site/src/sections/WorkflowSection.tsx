// src/components/WorkflowSection.tsx
import React from 'react';
import { TbFileUpload, TbCalendarCheck, TbCurrencyReal } from 'react-icons/tb';
import { motion } from 'framer-motion';


const steps = [
  { icon: <TbFileUpload size={32} />, title: 'Cadastre Aeronave', desc: 'Envie os dados da aeronave em segundos.' },
  { icon: <TbCalendarCheck size={32} />, title: 'Faça Reservas', desc: 'Selecione datas e confirme as reservas.' },
  { icon: <TbCurrencyReal size={32} />, title: 'Gerencie Cobranças', desc: 'Integre com Superlógica e acompanhe pagamentos.' },
];

export const WorkflowSection: React.FC = () => (
  <section id="how-it-works" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-sky-900 mb-12">Como Funciona</h2>
      <motion.div 
      className="grid grid-cols-1 md:grid-cols-3  gap-8"
      initial={{ opacity: 1, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      >
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white text-center p-6  rounded-lg shadow-md hover:shadow-xl transition">
            <div className="text-sky-900 mb-4">{step.icon}</div>
            <h3 className="text-xl text-sky-900 text-font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

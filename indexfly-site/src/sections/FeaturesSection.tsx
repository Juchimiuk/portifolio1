// src/components/FeaturesSection.tsx
import React from 'react';
import { BsFuelPumpDiesel } from 'react-icons/bs';
import { TbReportMoney, TbPlane, TbUsers } from "react-icons/tb";
import { motion } from 'framer-motion';

interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const features: Feature[] = [
    {
        title: 'Reservas Automatizadas',
        description:
            'Crie e gerencie reservas de voo em poucos cliques, respeitando cotas e prioridades.',
        icon: <TbPlane size={40} className="text-sky-900" />,
    },
    {
        title: 'Faturamento Integrado',
        description:
            'Gera cobranças automáticas e sincroniza pagamentos em tempo real.',
        icon: <TbReportMoney size={40} className="text-sky-900" />,
    },
    {
        title: 'Controle de Combustível',
        description:
            'Monitora consumo e registra abastecimentos para relatórios financeiros precisos.',
        icon: <BsFuelPumpDiesel size={40} className="text-sky-900" />,
    },
    {
        title: 'Gestão de Usuários',
        description:
            'Atribua papéis (administrador, piloto, sócio) e controle permissões no sistema.',
        icon: <TbUsers size={40} className="text-sky-900" />,
    },
];

export const FeaturesSection: React.FC = () => (
    <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
            <motion.h2
                className="text-3xl font-bold text-center mb-8 text-sky-900"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                Funcionalidades
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl duration-200"
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.div className="mb-4 flex justify-center">
                            {feature.icon}
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-4 text-sky-900">
                            {feature.title}
                        </h3>
                        <p className="text-gray-700">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

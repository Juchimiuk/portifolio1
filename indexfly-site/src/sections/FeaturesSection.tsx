// src/components/FeaturesSection.tsx
import React from 'react';
import { BsFuelPumpDiesel } from 'react-icons/bs';
import { TbReportMoney, TbHelicopter, TbCalendarCog } from "react-icons/tb";

interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
    descriptionClass?: string;
    titleClass?: string;
}

const features: Feature[] = [
    {
        title: 'Reservas Automatizadas',
        description:
            'Crie e gerencie reservas de voo em poucos cliques, respeitando cotas e prioridades.',
        icon: <TbCalendarCog size={40} className="text-sky-900" />,
        descriptionClass: "text-center",
        titleClass: "text-center",
    },
    {
        title: 'Faturamento Integrado',
        description:
            'Gere cobranças automáticas e sincronize recebimentos bancários em tempo real, via PIX.',
        icon: <TbReportMoney size={40} className="text-sky-900" />,
        descriptionClass: "text-center",
        titleClass: "text-center",
    },
    {
        title: 'Controle de Combustível',
        description:
            'Monitore consumos e registre abastecimentos fora de base para relatórios de consumos mais precisos.',
        icon: <BsFuelPumpDiesel size={40} className="text-sky-900" />,
        descriptionClass: "text-center",
        titleClass: "text-center",
    },
    {
        title: 'Gestão de Aeronaves',
        description:
            'Gerencie sua frota de maneira inteligente. Tenha visão de múltiplas aeronaves e relatórios inteligentes.',
        icon: <TbHelicopter size={40} className="text-sky-900" />,
        descriptionClass: "text-center",
        titleClass: "text-center",
    },
];

export const FeaturesSection: React.FC = () => (
    <section id="features" className="py-20">
        <div className="container mx-auto px-4">
            <h2
                className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-sky-900 tracking-tight"
            >
                Nossas Funcionalidades
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                    >
                        <div className="mb-6 flex justify-center items-center bg-sky-100 rounded-full w-16 h-16">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-sky-900 text-center">{feature.title}</h3>
                        <p className="text-gray-700 text-center text-base">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

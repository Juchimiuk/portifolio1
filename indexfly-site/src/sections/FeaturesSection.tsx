// src/components/FeaturesSection.tsx
import React from 'react';
import { BsFuelPumpDiesel } from 'react-icons/bs';
import { TbReportMoney, TbPlane,  TbUsers } from "react-icons/tb";

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
    <section className='bg-gray-100 h-[60vh]'>
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-sky-900">Funcionalidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => (
                    <div key={idx} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl duration-200">
                        <div className="mb-4 flex justify-center">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-sky-900">{feature.title}</h3>
                        <p className="text-gray-700">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

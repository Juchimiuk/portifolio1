// src/components/WorkflowSection.tsx
import React from 'react';
import { TbFileUpload, TbUsers, TbMap, TbCalendarTime, TbLayoutDashboard, TbUserSquare } from 'react-icons/tb';
import { FaRegCalendarAlt, FaFileInvoiceDollar } from 'react-icons/fa';
import { SiPix } from 'react-icons/si';


export const WorkflowSection: React.FC = () => (
  <section id="how-it-works" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-sky-900 mb-12 tracking-tight">Nossas Funcionalidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Primeira linha de caixas */}
        <div className="flex flex-col items-center bg-white text-center p-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sky-900 mb-4"><TbFileUpload size={36} /></div>
          <h3 className="text-lg text-sky-900 font-bold mb-2">Gestão de aeronaves</h3>
          <p className="text-gray-600 text-base">Gerencie num único lugar várias aeronaves com sócios ou utilizadores diferentes</p>
        </div>
        <div className="flex flex-col items-center bg-white text-center p-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sky-900 mb-4"><TbUsers size={36} /></div>
          <h3 className="text-lg text-sky-900 font-bold mb-2">Controle utilização por sócio/usuário</h3>
          <p className="text-gray-600 text-base">Controle os voos por etapas, dentro de um único voo e segmente a utilizaçào por sócio ou usuário</p>
        </div>
        <div className="flex flex-col items-center bg-white text-center p-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sky-900 mb-4"><FaFileInvoiceDollar size={36} /></div>
          <h3 className="text-lg text-sky-900 font-bold mb-2">Gestão Financeira</h3>
          <p className="text-gray-600 text-base">Gere arrecadações conforme horas voadas e atribua automaticamente a cada sócio/usuário do voo.</p>
        </div>
        {/* Segunda linha de caixas - edite individualmente */}
        <div className="flex flex-col items-center bg-white text-center p-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sky-900 mb-4"><TbMap size={36} /></div>
          <h3 className="text-lg text-sky-900 font-bold mb-2">Visualize com Mapas</h3>
          <p className="text-gray-600 text-base">Acompanhe o itinerário realizado em cada registro de voo.</p>
        </div>
        <div className="flex flex-col items-center bg-white text-center p-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sky-900 mb-4"><FaRegCalendarAlt size={36} /></div>
          <h3 className="text-lg text-sky-900 font-bold mb-2">Gerencie as Reservas</h3>
          <p className="text-gray-600 text-base">Os sócios ou usuários poderão realizar reservas e o piloto editar e confirmar</p>
        </div>
        <div className="flex flex-col items-center bg-white text-center p-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sky-900 mb-4"><SiPix size={36} /></div>
          <h3 className="text-lg text-sky-900 font-bold mb-2">Formas de pagamento através de Boletos ou Pix</h3>
          <p className="text-gray-600 text-base">Ofereça diferentes formas de pagamentos aos usuários/sócios de forma integrada.</p>
        </div>
        {/* Campos extras para edição manual */}
        <div className="flex flex-col items-center bg-white text-center p-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sky-900 mb-4"><TbCalendarTime size={36} /></div>
          <h3 className="text-lg text-sky-900 font-bold mb-2">Personalize regras</h3>
          <p className="text-gray-600 text-base">temos amplas opções para você visualizar e aplicar regras para reservas de utilização da aeronave conforme sua necessidade.</p>
        </div>
        <div className="flex flex-col items-center bg-white text-center p-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sky-900 mb-4"><TbLayoutDashboard size={36} /></div>
          <h3 className="text-lg text-sky-900 font-bold mb-2">Dashboard Inteligente</h3>
          <p className="text-gray-600 text-base">Visualize suas principais operações, locais de pouso, mapas de pouso</p>
        </div>
        <div className="flex flex-col items-center bg-white text-center p-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-sky-900 mb-4"><TbUserSquare size={36} /></div>
          <h3 className="text-lg text-sky-900 font-bold mb-2">Perfil do Sócio/Usuário</h3>
          <p className="text-gray-600 text-base">Visualize o perfil de utilização da aeronave, correlacione utilizador ou sócio com tempo de voo, visualize os principais locais de pouso</p>
        </div>
      </div>
    </div>
  </section>
);

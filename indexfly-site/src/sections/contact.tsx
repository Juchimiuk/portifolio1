import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInfo } from 'react-icons/fa';

const ContactInfoSection: React.FC = () => (
  <section id="contact-info" className="py-20">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-sky-900 mb-12 tracking-tight">Fale Conosco</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8">
          <FaPhoneAlt className="text-sky-900 w-10 h-10 mb-4" />
          <h3 className="text-lg font-bold mb-2 text-sky-900">Telefone</h3>
          <p className="text-gray-600 text-base">(047) 3046-8216</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8">
          <FaEnvelope className="text-sky-900 w-10 h-10 mb-4" />
          <h3 className="text-lg font-bold mb-2 text-sky-900">E-mail</h3>
          <p className="text-gray-600 text-base">atendimento@indexadm.com.br</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8">
          <FaMapMarkerAlt className="text-sky-900 w-10 h-10 mb-4" />
          <h3 className="text-lg font-bold mb-2 text-sky-900">Endereço</h3>
          <p className="text-gray-600 text-base">
            Av. Osvaldo Reis, 3281<br />Praia Brava, Itajai/SC<br />CEP 88306-773
          </p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8">
          <FaInfo className="text-sky-900 w-10 h-10 mb-4" />
          <h3 className="text-lg font-bold mb-2 text-sky-900">Informações</h3>
          <p className="text-gray-600 text-base">
            Index Administradora Ltda<br />CNPJ 14.424.283/0001-03
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactInfoSection;

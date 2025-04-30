import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfoSection: React.FC = () => (
  <section id="contact-info" className="bg-gray-50 py-20">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-2xl font-bold text-sky-900 mb-8">Nossos Contatos</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-sky-900 w-10 h-10 mb-4 hover:scale-110 duration-300" />
          <h3 className="text-xl font-semibold mb-2">Telefone</h3>
          <p className="text-gray-600 text-sm" >+55 (11) 1034-5678</p>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-sky-900 w-10 h-10 mb-4 hover:scale-110 duration-300" />
          <h3 className="text-xl font-semibold mb-2">E-mail</h3>
          <p className="text-gray-600 text-sm ">contato@indexfly.com</p>
        </div>
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-sky-900 w-10 h-10 mb-4 hover:scale-110 duration-300" />
          <h3 className="text-xl font-semibold mb-2">Endereço</h3>
          <p className="text-gray-600 text-sm">
            Av. Osvaldo Reis, 3281<br />Praia Brava, Itajai
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactInfoSection;

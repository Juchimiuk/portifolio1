import { motion } from 'framer-motion';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInfo } from 'react-icons/fa';

const ContactInfoSection: React.FC = () => (
  <section id="contact-info" className="bg-gray-50 py-20">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-2xl font-bold text-sky-900 mb-8">Nossos Contatos</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}>
          <FaPhoneAlt className="text-sky-900 w-8 h-8 mb-4 hover:scale-110 duration-300" />
          <h3 className="text-xl font-semibold mb-2">Telefone</h3>
          <p className="text-gray-600 text-sm" >(047) 3046-8216</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}>
          <FaEnvelope className="text-sky-900 w-8 h-8 mb-4 hover:scale-110 duration-300" />
          <h3 className="text-xl font-semibold mb-2">E-mail</h3>
          <p className="text-gray-600 text-sm ">atendimento@indexadm.com.br</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}>
          <FaMapMarkerAlt className="text-sky-900 w-8 h-8 mb-4 hover:scale-110 duration-300" />
          <h3 className="text-xl font-semibold mb-2">Endereço</h3>
          <p className="text-gray-600 text-sm">
            Av. Osvaldo Reis, 3281<br />Praia Brava, Itajai<br />CEP 88306-773
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}>
          <FaInfo className="text-sky-900 w-8 h-8 mb-4 hover:scale-110 duration-300" />
          <h3 className="text-xl font-semibold mb-2">Informações</h3>
          <p className="text-gray-600 text-sm">
            Index Administradora<br />CNPJ 14.424.283/0001-03
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactInfoSection;

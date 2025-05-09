import { motion } from 'framer-motion';
import React from 'react';

export const BookSection: React.FC = () => (
  <section id="ebook" className="bg-white ">
    <div className=" flex flex-col lg:flex-row items-center gap-8">
      {/* Texto e CTA */}
      <div className=" ml-10 mr-10 lg:w-3/5  text-center lg:text-left">
        <h2 className="text-2xl  sm:text-3xl font-bold text-sky-900 mb-4">
          LIVRO FINANCEIRO E GESTÃO DE AERONAVES
        </h2>
        <div className="space-y-7  text-gray-700 mb-6 text-justify text-sm sm:text-base">
          <p>
            Nossa solução destaca-se primordialmente pelo seu abrangente livro financeiro, uma ferramenta essencial para a gestão <b> meticulosa e detalhada</b> de operações aéreas. Este módulo centraliza contratos, a administração financeira e o controle de gastos, facilitando uma visão clara e atualizada das finanças. Com ele, é possível realizar o rateio de despesas de maneira eficiente entre sócios, respeitando as cotas de cada um e garantindo <b>transparência total.</b>
          </p>
          <p>
            As funcionalidades são desenhadas para proporcionar não apenas conformidade e controle, mas também para permitir uma gestão em <b>tempo real</b>, adaptando-se dinamicamente às necessidades específicas de cada operação.
          </p>
          <p>
            O aplicativo complementar de gestão de voos, que integra organizações do diário de bordo, é mais um recurso que reflete nosso compromisso com a eficiência operacional e a excelência no serviço. Juntos, estes sistemas formam uma solução robusta que transforma a complexidade das operações aéreas em uma gestão simplificada e altamente <b> eficaz.</b>
          </p>
        </div>
      </div>
      {/* Imagem do Livro */}
      <motion.div
        className="lg:w-2/5 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="livro.png"
          alt="Capa do e-book IndexFly"
          className="w-64 sm:w-80 md:w-full h-auto shadow-lg"
        />
      </motion.div>
    </div>
  </section>
);

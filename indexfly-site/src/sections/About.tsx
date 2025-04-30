import React from 'react';

export const AboutSection: React.FC = () => (
    <section id="ebook" className="bg-white py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 flex justify-center">
                <img
                    src="livro.png"
                    alt="Capa do e-book IndexFly"
                    className="w-64 sm:w-72 md:w-84 h-auto rounded-lg shadow-md"
                />
            </div>
            {/* Texto e CTA */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 mb-4">
                    SOBRE O INDEXFLY
                </h2>
                <div className="space-y-6 text-gray-700 mb-6">
                    <p>
                        O IndexFly é uma plataforma especializada na gestão de operações aéreas, desenvolvida para atender as necessidades de aeronaves compartilhadas e frotas executivas. Com uma interface intuitiva, o sistema integra todos os aspectos da administração aeronáutica em um só lugar — desde reservas automatizadas até o controle financeiro completo.          </p>
                    <p>
                        Entre os principais diferenciais estão o livro financeiro inteligente, que permite o rateio preciso das despesas entre sócios, e o diário de bordo digital, que organiza cada etapa do voo de forma prática e confiável. O sistema também oferece dashboards personalizados e alertas automáticos, proporcionando uma visão estratégica em tempo real da operação.          </p>
                    <p>
                        Projetado para reduzir a carga administrativa de pilotos e gestores, o IndexFly transforma a complexidade da gestão aérea em um processo fluido, eficiente e profissional. Tudo isso com foco em segurança, organização e transparência.
                    </p>
                </div>
            </div>
            {/* Imagem do Livro */}

        </div>
    </section>
);

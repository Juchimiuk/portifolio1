import React from 'react';

const ScreenSection: React.FC = () => (
    <section id="screen" className="bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            {/* Imagem grande */}
            <div className="lg:w-1/2">
                <img
                    src="/images/tela.png"
                    alt="Tela do sistema IndexFly"
                    className="w-full rounded-lg shadow-lg"
                />
            </div>

            {/* Texto à direita */}
            <div className="lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-sky-900 mb-4">
                    Inovação e Segurança
                </h2>
                <p className="text-gray-600 mb-6">
                    A IndexFly oferece o que há de melhor em inovação para uma experiência de voo superior. Sinta-se confortável e seguro todos os dias, em qualquer lugar. </p>
                <a
                    href="#features"
                    className="inline-block border-2 border-sky-900 rounded-l-full rounded-tr-full px-8 py-3 text-sky-900 font-medium hover:bg-gray-100 transition"
                >
                    View More
                </a>
            </div>
        </div>
    </section>
);

export default ScreenSection;

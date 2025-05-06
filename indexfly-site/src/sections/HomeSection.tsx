// src/components/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {


    return (
        <section
            id="home"
            className="scroll-mt-16 relative h-screen bg-[url(bgsky.png)] bg-cover bg-center  overflow-x-hidden overflow-y-hidden"
        >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 flex flex-col sm:flex-row justify-center items-center text-center">
                    Bem-vindo ao 
                    <motion.img
                        src="/indexfly.png"
                        alt="IndexFly Logo"
                        className="w-40 sm:w-60 pt-4 sm:pt-0 sm:pl-2"
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 90, delay: 0.5 }}
                    />
                </h1>

                {/* Parágrafo com efeito typewriter */}
                <motion.p
                    className="text-sm md:text-lg text-white mb-8 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    No coração do nosso serviço está o compromisso de simplificar a gestão
                    de operação aérea de aeronaves executivas e compartilhadas, oferecendo
                    uma experiência intuitiva e fácil de usar.

                </motion.p>

                <motion.a
                    href="#features"
                    className="px-6 py-3 md:px-10 md:py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm md:text-base"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
                >
                    Saiba Mais
                </motion.a>
            </div>
        </section>
    );
};

export default HeroSection;

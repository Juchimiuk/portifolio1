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
                    Seja bem-vindo  
                    
                </h1>

                {/* Parágrafo com efeito typewriter */}
                <motion.p
                    className="text-sm md:text-lg text-white mb max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    No coração do nosso serviço está o compromisso de simplificar a gestão
                    de operação aérea de aeronaves executivas e compartilhadas, oferecendo
                    uma experiência intuitiva e fácil de usar.

                </motion.p>

               
            </div>
        </section>
    );
};

export default HeroSection;

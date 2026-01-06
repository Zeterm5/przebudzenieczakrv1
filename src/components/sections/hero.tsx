import React, { useState } from 'react';
import { Zap } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import { motion } from 'framer-motion';
import SilkShader from '../ui/SilkShader';

const Hero = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Silk Shader Background */}
      <SilkShader />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-black/50 to-slate-800/40 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-2xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 20px #00ff41',
                  '0 0 40px #00ff41',
                  '0 0 20px #00ff41'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-16 h-16 text-green-400" />
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-mono">
            <span className="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              To nie przypadek,
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">
              że trafiłaś na tę wiadomość
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <p className="text-xl md:text-2xl text-green-200 mb-8 font-light font-mono">
            To Twój moment przebudzenia.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-6 font-semibold">
            Odkryj ukrywaną od wieków prawdę o 22 czakrach,
            <br />
            które mogą odmienić Twoje życie
          </h2>
        </ScrollReveal>

        {/* Book cover */}
        <ScrollReveal delay={1.0}>
          <div className="mb-12 flex justify-center">
            <motion.div
              className="shadow-2xl rounded-lg overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/Okładka E-booka.jpg"
                alt="E-book cover"
                className="w-64 h-auto object-cover"
              />
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1.2}>
          <div className="flex flex-col gap-6 justify-center items-center relative z-20 pointer-events-auto">
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-semibold text-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300 shadow-2xl border border-green-400 font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHoveredButton('discover')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative text-center pointer-events-none">
                <span>Odkryj sekrety wszechświata</span>
              </div>
            </motion.button>

            {hoveredButton === 'discover' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center text-gray-300 font-mono text-sm pointer-events-none"
              >
                Wyjdź z Matrixu
              </motion.div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Eye, Zap, Code } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import { motion } from 'framer-motion';

const AboutBook = () => {
  return (
    <section id="o-ebooku" className="py-20 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Code className="w-8 h-8 text-green-400" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent font-mono">
                Ukrywana Prawda
              </h2>
              <Code className="w-8 h-8 text-green-400" />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <ScrollReveal delay={0.2}>
              <motion.div 
                className="p-6 bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-2xl border border-green-500/30 backdrop-blur-sm"
                whileHover={{ scale: 1.02, borderColor: 'rgba(34, 197, 94, 0.6)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-green-300 mb-4 font-mono">
                  Przez wieki myśleliśmy, że istnieje 7 czakr...
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ta wiedza była niekompletna. Ukrywana przed ludzkością znajdowała się prawda o 
                  <span className="text-green-400 font-semibold font-mono"> 22 czakrach</span>, które wykraczają 
                  poza nasze fizyczne ciało i otwierają bramy do nieograniczonych możliwości.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <motion.div 
                className="p-6 bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-2xl border border-blue-500/30 backdrop-blur-sm"
                whileHover={{ scale: 1.02, borderColor: 'rgba(59, 130, 246, 0.6)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center font-mono">
                  <Eye className="w-6 h-6 mr-2 text-green-400" />
                  Symbole Alfa i Omega
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Kościół od wieków znał tę prawdę - symbole Alfa i Omega nie są przypadkowe. 
                  To wskazówki do <span className="text-blue-400 font-semibold font-mono">ukrywanej wiedzy</span> 
                  o pełnym spektrum naszej duchowej natury.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <motion.div 
                className="p-6 bg-gradient-to-r from-slate-900/80 to-black/80 rounded-2xl border border-purple-500/30 backdrop-blur-sm"
                whileHover={{ scale: 1.02, borderColor: 'rgba(147, 51, 234, 0.6)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center font-mono">
                  <Zap className="w-6 h-6 mr-2 text-purple-400" />
                  Przełomowe odkrycie dla nowych czasów
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Nadszedł czas, by ta wiedza ujrzała światło dzienne. 
                  <span className="text-purple-400 font-semibold font-mono"> Era Nowej Ziemi</span> wymaga 
                  od nas pełnego zrozumienia naszego duchowego potencjału.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.8} direction="right">
            <div className="flex justify-center">
              <div className="relative">
                {/* Matrix-style energy aura effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full filter blur-3xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="relative w-80 h-80 bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-full flex items-center justify-center shadow-2xl border-2 border-green-400/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-center space-y-4">
                    <motion.div 
                      className="text-6xl font-bold text-green-300 font-mono"
                      animate={{ 
                        textShadow: [
                          '0 0 10px #00ff41',
                          '0 0 20px #00ff41',
                          '0 0 10px #00ff41'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      22
                    </motion.div>
                    <div className="text-xl text-blue-300 font-mono">Czakr</div>
                    <div className="w-16 h-1 bg-green-400 mx-auto rounded-full"></div>
                    <div className="text-sm text-gray-400 font-mono">Ukrywana Prawda</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutBook;
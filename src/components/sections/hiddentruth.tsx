import React from 'react';
import { Shield, AlertTriangle, Lock, Skull } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import { motion } from 'framer-motion';

const HiddenTruth = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black relative">
      {/* Dark mystical background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Skull className="w-10 h-10 text-red-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-red-300 font-mono">
                Dlaczego ta wiedza była ukrywana?
              </h2>
              <Skull className="w-10 h-10 text-red-400" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              Wiedza o naszych duchowych darach była ukrywana przez setki lat
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal delay={0.2}>
            <motion.div 
              className="p-8 bg-gradient-to-br from-red-900/30 to-black/50 rounded-2xl border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Shield className="w-16 h-16 text-red-400 mx-auto mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-red-300 mb-4 font-mono">
                  Symbole Kościoła
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Alfa i Omega nie były tylko symbolami. To były wskazówki do ukrywanej 
                  wiedzy o pełnym spektrum ludzkiej duchowości - 22 poziomach świadomości.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <motion.div 
              className="p-8 bg-gradient-to-br from-orange-900/30 to-black/50 rounded-2xl border-2 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Lock className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-300 mb-4 font-mono">
                  Ukrywanie Potencjału
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Kontrola nad ludzkością była łatwiejsza, gdy nie znaliśmy swojej prawdziwej mocy. 
                  22 czakry to klucz do naszej pełnej duchowej autonomii.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <motion.div 
              className="p-8 bg-gradient-to-br from-yellow-900/30 to-black/50 rounded-2xl border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-4 font-mono">
                  Matrix vs Boska Energia
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Manipulacja energią człowieka przez systemy kontroli. Prawdziwa wolność 
                  przychodzi z połączenia z boską energią kreatywności.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.8}>
          <motion.div 
            className="text-center p-8 bg-gradient-to-r from-slate-800/60 to-black/80 rounded-2xl border border-green-500/30 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-3xl font-bold text-green-300 mb-4 font-mono">
              Dlaczego ta wiedza była ukrywana?
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Era Wodnika przynosi odsłonięcie wszystkich tajemnic. Ci, którzy są gotowi 
              na przebudzenie, otrzymają dostęp do pełnej wiedzy o swoim duchowym dziedzictwie.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HiddenTruth;
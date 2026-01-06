import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 10px #00ff41',
                  '0 0 20px #00ff41',
                  '0 0 10px #00ff41'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-8 h-8 text-green-400" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-mono">
              Przebudzenie 22 Czakr
            </span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#o-ebooku" className="text-gray-300 hover:text-green-400 transition-colors font-mono">
              O e-booku
            </a>
            <a href="#fragmenty" className="text-gray-300 hover:text-green-400 transition-colors font-mono">
              Fragmenty
            </a>
            <a href="#autorka" className="text-gray-300 hover:text-green-400 transition-colors font-mono">
              Autorka
            </a>
            <a href="#faq" className="text-gray-300 hover:text-green-400 transition-colors font-mono">
              FAQ
            </a>
          </nav>

          <button
            className="md:hidden text-green-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-500/20">
            <nav className="flex flex-col space-y-2">
              <a href="#o-ebooku" className="text-gray-300 hover:text-green-400 transition-colors py-2 font-mono">
                O e-booku
              </a>
              <a href="#fragmenty" className="text-gray-300 hover:text-green-400 transition-colors py-2 font-mono">
                Fragmenty
              </a>
              <a href="#autorka" className="text-gray-300 hover:text-green-400 transition-colors py-2 font-mono">
                Autorka
              </a>
              <a href="#faq" className="text-gray-300 hover:text-green-400 transition-colors py-2 font-mono">
                FAQ
              </a>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
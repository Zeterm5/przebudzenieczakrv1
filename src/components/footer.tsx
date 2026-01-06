import React from 'react';
import { Mail, Facebook, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-16 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-gold-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-gold-400 bg-clip-text text-transparent">
                Przebudzenie 22 Czakr
              </h3>
            </div>
            <p className="text-purple-200 leading-relaxed mb-6">
              Odkryj ukrywaną od wieków prawdę o Twoich duchowych możliwościach. 
              Rozpocznij podróż do pełnego przebudzenia świadomości.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:from-pink-400 hover:to-purple-400 transition-all">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Szybkie linki</h4>
            <ul className="space-y-2 text-purple-200">
              <li>
                <a href="#o-ebooku" className="hover:text-gold-400 transition-colors">
                  O e-booku
                </a>
              </li>
              <li>
                <a href="#fragmenty" className="hover:text-gold-400 transition-colors">
                  Fragmenty
                </a>
              </li>
              <li>
                <a href="#autorka" className="hover:text-gold-400 transition-colors">
                  O autorce
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Informacje prawne</h4>
            <ul className="space-y-2 text-purple-200">
              <li>
                <a href="/privacy" className="hover:text-gold-400 transition-colors">
                  Polityka prywatności
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-gold-400 transition-colors">
                  Polityka zwrotów
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gold-400 transition-colors">
                  Skontaktuj się z nami
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-500/20 pt-8 text-center">
          <p className="text-purple-300">
            © 2024 Przebudzenie 22 Czakr. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-sm text-purple-400 mt-2">
            Stworzone z ❤️ dla duchowego przebudzenia ludzkości
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
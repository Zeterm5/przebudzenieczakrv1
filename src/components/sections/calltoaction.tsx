import React from 'react';
import { Download, Shield, Clock, CreditCard, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500 rounded-full filter blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gold-500 to-purple-500 rounded-full mb-8">
            <Download className="w-10 h-10 text-white animate-bounce" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Jeśli to czytasz –</span>
            <br />
            <span className="bg-gradient-to-r from-gold-300 to-purple-300 bg-clip-text text-transparent">
              to nie jest przypadek
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-purple-200 mb-8 font-light">
            Twoje przebudzenie już się zaczęło
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-gold-400 to-purple-400 mx-auto rounded-full mb-12"></div>
        </div>

        {/* Main CTA */}
        <div className="mb-12">
          <button className="group relative px-12 py-6 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-slate-900 text-xl font-bold rounded-2xl hover:from-gold-500 hover:via-gold-400 hover:to-gold-500 transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-gold-400 min-w-96">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative flex items-center justify-center space-x-3">
              <Download className="w-6 h-6" />
              <span>Kup e-book – natychmiastowy dostęp</span>
            </div>
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12 text-sm text-purple-200">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span>100% bezpieczna płatność</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-400" />
            <span>Natychmiastowa dostawa PDF</span>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-purple-400" />
            <span>Karta • PayPal • BLIK</span>
          </div>
        </div>

        {/* Urgency message */}
        <div className="p-8 bg-gradient-to-r from-slate-800/60 to-purple-900/60 rounded-2xl border-2 border-gold-500/50 backdrop-blur-sm mb-8">
          <h3 className="text-2xl font-bold text-gold-300 mb-4">
            Era przebudzenia się rozpoczęła
          </h3>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto leading-relaxed">
            Ci, którzy pierwszymi odkryją prawdę o 22 czakrach, będą pionierami nowej świadomości.
            Nie zwlekaj - Twoja duchowa transformacja czeka już za rogiem.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="mb-12">
          <button
            onClick={() => navigate('/contact')}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-blue-400 flex items-center justify-center space-x-2 mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>Zadaj pytanie</span>
            </div>
          </button>
        </div>

        {/* Energy pulse effect */}
        <div className="mt-12 flex justify-center">
          <div className="relative">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-gold-400 opacity-75 animate-ping"
                style={{ animationDelay: `${i * 0.5}s`, animationDuration: '2s' }}
              ></div>
            ))}
            <div className="w-4 h-4 bg-gold-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
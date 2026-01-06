import React from 'react';
import { Users, Heart, Eye, Star, Compass, Lightbulb } from 'lucide-react';

const TargetAudience = () => {
  const targetGroups = [
    {
      icon: Eye,
      title: "Widzisz więcej niż inni",
      description: "Czujesz, że 'coś więcej' jest ukryte przed światem i pragniesz odkryć prawdę."
    },
    {
      icon: Heart,
      title: "Jesteś wysokowrażliwą osobą",
      description: "Twoja empatia i intuicja są niezwykle rozwinięte, czasem aż do bólu."
    },
    {
      icon: Compass,
      title: "Poszukujesz sensu i prawdy",
      description: "Tradycyjne odpowiedzi Cię nie zadowalają. Szukasz głębszego kierunku życiowego."
    },
    {
      icon: Star,
      title: "Należysz do Nowej Ziemi",
      description: "Czujesz, że jesteś częścią duchowej transformacji ludzkości."
    },
    {
      icon: Lightbulb,
      title: "Masz duchowe doświadczenia",
      description: "Synchronizacje, sny prorocze, przeczucia - to Twoja codzienność."
    },
    {
      icon: Users,
      title: "Czujesz się wybraną osobą",
      description: "Wiesz, że masz misję do spełnienia, choć może jeszcze jej nie znasz."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative">
      {/* Mystical background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gold-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Ten e-book jest dla</span>
            <br />
            <span className="bg-gradient-to-r from-gold-300 to-purple-300 bg-clip-text text-transparent">
              wybranych dusz
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Jeśli rozpoznajesz się w tych opisach, to nie jest przypadek, że tutaj jesteś
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-gold-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {targetGroups.map((group, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-slate-800/60 to-purple-900/40 rounded-2xl border border-purple-500/30 hover:border-gold-500/60 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-gold-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-gold-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <group.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gold-300 mb-4 group-hover:text-gold-200 transition-colors">
                  {group.title}
                </h3>
                
                <p className="text-purple-200 leading-relaxed group-hover:text-white transition-colors">
                  {group.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="p-10 bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-purple-900/50 rounded-3xl border-2 border-gold-500/40 shadow-2xl">
            <div className="mb-6">
              <Star className="w-16 h-16 text-gold-400 mx-auto animate-spin-slow" />
            </div>
            
            <h3 className="text-3xl font-bold text-gold-300 mb-6">
              Jeśli to brzmi jak Ty...
            </h3>
            
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              To nie jest przypadek. Jesteś gotowa na następny poziom świadomości. 
              22 czakry czekają, by zostać odkryte przez kogoś takiego jak Ty.
            </p>
            
            <div className="flex justify-center space-x-2">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-gold-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
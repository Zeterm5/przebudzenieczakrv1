import React from 'react';
import { Brain, Eye, Zap, Heart, Star, Lightbulb } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Odblokujesz 22 duchowe kanały energii",
      description: "Każdy czakra to brama do innego wymiaru świadomości i możliwości."
    },
    {
      icon: Eye,
      title: "Zrozumiesz swoje dary",
      description: "Telepatia, intuicja, jasnowidzenie - przestaną być tajemnicą."
    },
    {
      icon: Zap,
      title: "Zmienisz swoje paliwo energetyczne",
      description: "Z matrixowej energii przejdziesz na boską energię kreatywności."
    },
    {
      icon: Heart,
      title: "Zrozumiesz, kim naprawdę jesteś",
      description: "Odkryjesz swoją prawdziwą naturę jako duchowa istota."
    },
    {
      icon: Star,
      title: "Zaczniesz działać z poziomu wolności",
      description: "Uwolnisz się od ograniczeń i zaczniesz tworzyć z pełnej mocy."
    },
    {
      icon: Lightbulb,
      title: "Aktywujesz ekspresję swojej duszy",
      description: "Twoja unikalna energia znajdzie swoje miejsce w świecie."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 relative overflow-hidden">
      {/* Animated energy particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold-400 rounded-full opacity-70 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold-300 via-purple-300 to-gold-300 bg-clip-text text-transparent">
              Jak zmieni się Twoje życie
            </span>
            <br />
            <span className="text-white">po przeczytaniu e-booka?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-2xl border border-purple-500/30 hover:border-gold-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-gold-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-gold-600 rounded-2xl filter blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gold-300 mb-4 group-hover:text-gold-200 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-purple-200 leading-relaxed group-hover:text-white transition-colors">
                {benefit.description}
              </p>
              
              <div className="mt-6 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-r from-gold-900/30 to-purple-900/30 rounded-2xl border-2 border-gold-500/30">
            <h3 className="text-3xl font-bold text-gold-300 mb-4">
              ✨ To dopiero początek transformacji ✨
            </h3>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Każdy z 22 czakr otwiera nowe możliwości. Twoja podróż duchowego przebudzenia 
              stanie się najbardziej fascynującą przygodą Twojego życia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
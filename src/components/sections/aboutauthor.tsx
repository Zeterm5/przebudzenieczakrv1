import React from 'react';
import { Heart, Sparkles, BookOpen, Star } from 'lucide-react';

const AboutAuthor = () => {
  return (
    <section id="autorka" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-300 to-gold-300 bg-clip-text text-transparent">
              O Autorce
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-gold-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Author photo placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-gold-500 rounded-full filter blur-2xl opacity-50 scale-110"></div>
              <div className="relative w-80 h-80 bg-gradient-to-br from-purple-600 via-indigo-600 to-gold-600 rounded-full flex items-center justify-center border-4 border-gold-400/50 shadow-2xl">
                <div className="text-center space-y-3">
                  <Heart className="w-12 h-12 text-gold-300 mx-auto animate-pulse" />
                  <p className="text-gold-200 font-semibold text-sm px-4 leading-relaxed">
                    [MIEJSCE NA ZDJĘCIE AUTORKI – PODSTAWIAM PÓŹNIEJ]
                  </p>
                  <Sparkles className="w-8 h-8 text-purple-300 mx-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Author description */}
          <div className="space-y-8 lg:pl-8">
            <div className="p-6 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl border border-purple-500/30">
              <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 text-gold-400 mr-2" />
                <h3 className="text-2xl font-bold text-gold-300">
                  Duchowa Przewodniczka
                </h3>
              </div>
              <p className="text-purple-200 leading-relaxed">
                Autorka to osoba kreatywna, wrażliwa i głęboko duchowa. Przez lata podróżowała 
                ścieżkami samopoznania, eksplorując tajemnice ludzkiej świadomości i energetycznych 
                wymiarów rzeczywistości.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-indigo-900/50 to-slate-900/50 rounded-2xl border border-gold-500/30">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-400 mr-2" />
                <h3 className="text-2xl font-bold text-purple-300">
                  Misja Transformacji
                </h3>
              </div>
              <p className="text-purple-200 leading-relaxed">
                Ten e-book powstał z autentycznej potrzeby transformacji ludzkiej świadomości. 
                Autorka odkryła, że tradycyjna wiedza o 7 czakrach to tylko wierzchołek góry lodowej 
                naszego duchowego potencjału.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-slate-900/50 to-purple-900/50 rounded-2xl border border-purple-500/30">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-red-400 mr-2" />
                <h3 className="text-2xl font-bold text-red-300">
                  Wsparcie w Przebudzeniu
                </h3>
              </div>
              <p className="text-purple-200 leading-relaxed">
                Jej celem jest wspieranie ludzi w otwieraniu się na własną moc i rozpoznawaniu 
                swojego miejsca w nowej erze świadomości. Wierzy, że każda osoba ma dostęp 
                do niezwykłych duchowych darów.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-gold-900/30 to-purple-900/30 rounded-2xl border-2 border-gold-500/50">
              <Star className="w-8 h-8 text-gold-400 mx-auto mb-3 animate-pulse" />
              <p className="text-lg text-gold-300 font-semibold italic">
                "Każdy z nas to duchowa istota mająca ludzkie doświadczenie. 
                Czas przypomnieć sobie, kim naprawdę jesteśmy."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
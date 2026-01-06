import React from 'react';
import { Quote } from 'lucide-react';

const BookFragments = () => {
  const fragments = [
    {
      id: 1,
      placeholder: "[FRAGMENT 1 – TUTAJ WKLEJĘ TEKST]",
      category: "Ukryta Wiedza"
    },
    {
      id: 2,
      placeholder: "[FRAGMENT 2 – TUTAJ WKLEJĘ TEKST]",
      category: "Duchowe Przebudzenie"
    },
    {
      id: 3,
      placeholder: "[FRAGMENT 3 – TUTAJ WKLEJĘ TEKST]",
      category: "22 Czakry"
    }
  ];

  return (
    <section id="fragmenty" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-300 to-gold-300 bg-clip-text text-transparent">
              Fragmenty z e-booka
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Poznaj smak ukrywanej wiedzy, która czeka na Ciebie w pełnej wersji
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-purple-400 to-gold-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {fragments.map((fragment, index) => (
            <div
              key={fragment.id}
              className="group p-8 bg-gradient-to-r from-slate-900/80 to-purple-900/30 rounded-2xl border-2 border-transparent hover:border-gold-500/50 transition-all duration-500 relative overflow-hidden"
              style={{
                backgroundImage: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)'
              }}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-gold-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 filter blur-sm"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <Quote className="w-12 h-12 text-gold-400 transform rotate-180" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className="px-3 py-1 text-xs font-semibold text-purple-200 bg-purple-800/50 rounded-full border border-purple-600/50">
                        {fragment.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pl-16">
                  <div className="min-h-32 flex items-center justify-center bg-slate-800/50 rounded-xl border-2 border-dashed border-purple-500/30 group-hover:border-gold-500/50 transition-colors">
                    <p className="text-lg text-purple-300 font-medium text-center italic">
                      {fragment.placeholder}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end mt-4 pl-16">
                  <Quote className="w-8 h-8 text-gold-400" />
                </div>
              </div>

              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 p-6 bg-gradient-to-r from-gold-900/30 to-purple-900/30 rounded-2xl border border-gold-500/50">
            <Quote className="w-6 h-6 text-gold-400" />
            <p className="text-xl text-gold-300 font-semibold">
              To tylko próbka głębi wiedzy, która Cię czeka...
            </p>
            <Quote className="w-6 h-6 text-gold-400 transform rotate-180" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookFragments;
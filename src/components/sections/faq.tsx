import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Czy ta wiedza jest zgodna z duchowością?",
      answer: "Absolutnie tak. Wiedza o 22 czakrach nie stoi w sprzeczności z żadną tradycją duchową. Przeciwnie - uzupełnia i pogłębia zrozumienie naszej duchowej natury. Wiele starożytnych tradycji zawierało wskazówki do tej pełniejszej wiedzy."
    },
    {
      question: "Czy e-book jest dla początkujących?",
      answer: "Tak, e-book został napisany w sposób przystępny dla każdego. Nie potrzebujesz wcześniejszej wiedzy o czakrach. Wszystko zostało wytłumaczone krok po kroku, z praktykami i przykładami."
    },
    {
      question: "Czy ta wiedza jest niebezpieczna?",
      answer: "Wręcz przeciwnie. Poznanie prawdy o swoich duchowych centrach energii jest całkowicie bezpieczne i naturalne. To wiedza o tym, kim naprawdę jesteś - nic nie może być bardziej bezpieczne niż samopoznanie."
    },
    {
      question: "Ile trwa przeczytanie książki?",
      answer: "E-book można przeczytać w 2-3 godziny. Jednak prawdziwa transformacja wymaga czasu na przemyślenie i zastosowanie opisanych praktyk. Polecam spokojne studiowanie przez kilka dni."
    },
    {
      question: "Czy mogę płacić kartą lub PayPalem?",
      answer: "Tak, akceptujemy wszystkie popularne metody płatności: karty Visa/Mastercard, PayPal, BLIK oraz przelewy bankowe. Wszystko odbywa się przez bezpieczne, szyfrowane połączenie."
    },
    {
      question: "Co jeśli e-book mi się nie spodoba?",
      answer: "Jestem przekonana o wartości tej wiedzy, ale jeśli z jakiegokolwiek powodu nie będziesz zadowolona, zwrócę Ci pieniądze w ciągu 30 dni bez zadawania pytań."
    },
    {
      question: "Kiedy otrzymam dostęp do e-booka?",
      answer: "Natychmiast po opłaceniu otrzymasz link do pobrania pliku PDF na swój adres email. Proces trwa maksymalnie kilka minut."
    },
    {
      question: "Czy będą kolejne materiały na ten temat?",
      answer: "To dopiero początek. Po e-booku planuję kursy online, medytacje prowadzone i webinaria dla tych, którzy będą chcieli pogłębić swoją praktykę z 22 czakrami."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-800 relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gold-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-gold-600 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-300 to-gold-300 bg-clip-text text-transparent">
              Częste Pytania
            </span>
          </h2>
          <p className="text-xl text-purple-200">
            Odpowiedzi na najczęściej zadawane pytania
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-purple-400 to-gold-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-900/60 to-purple-900/40 rounded-2xl border border-purple-500/30 hover:border-gold-500/50 transition-all duration-300 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openQuestions.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-gold-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openQuestions.includes(index) && (
                <div className="px-8 pb-6 animate-fade-in">
                  <div className="border-t border-purple-500/20 pt-4">
                    <p className="text-purple-200 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-r from-gold-900/30 to-purple-900/30 rounded-2xl border border-gold-500/50">
            <h3 className="text-2xl font-bold text-gold-300 mb-4">
              Masz inne pytania?
            </h3>
            <p className="text-purple-200 mb-6">
              Skontaktuj się ze mną bezpośrednio - odpowiem na wszystkie Twoje wątpliwości
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
              Zadaj pytanie
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
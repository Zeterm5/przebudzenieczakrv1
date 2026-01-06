import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import { motion } from 'framer-motion';

const EbookFragments = () => {
  const [hoveredCta, setHoveredCta] = useState<string | null>(null);

  const fragments = [
    {
      id: 'fragment1',
      content: `"Imagine a flower enclosed in a glass sphere. Its petals are vibrant, full of potential, yet the transparent barrier constrains its growth. The Metatronic Matrix is a perfectly ordered structure, encompassing all five Platonic solids, the Tree of Life, the Seed of Life, and the Star of David. Its elements form a network based on the Golden Ratio and other sacred proportions. While the beauty of the Matrix is captivating, its harmonious geometry is a source of limitation for the individual.
The Matrix imposes precisely defined pathways for energy flow. The soul's energy, creativity, and intuition – the metaphorical "petals of the flower" – follow prescribed patterns. Energy flow is stable and directed, but can be spontaneous."`,
    },
    {
      id: 'fragment2',
      content: `"By accessing higher chakras, people can recall skills, knowledge, and insights from previous incarnations. Imagine a physicist suddenly understanding concepts centuries before humanity developed them, or a healer instinctively knowing energy patterns."`,
    },
    {
      id: 'fragment3',
      content: `"Rituals mirror the same cycle: in Baptism, immersion in water represents Omega (descent into matter), while rising from the water is Alpha (rebirth into spirit). In the Eucharist, bread and wine (matter) reflect Omega, while their transformation into body and spirit reflects Alpha.

The liturgy as a whole can be seen as a ritual of incarnation and return: a journey of energy that descends into form and then rises again. This is the very same function carried by the Alpha and Omega chakras in the human energy field."`,
    },
  ];

  const comparisonData = [
    {
      matrix: 'Reakcja zamiast kreacji',
      divine: 'Twórczość zamiast kontroli',
    },
    {
      matrix: 'Lęk, chaos, ciężka energia',
      divine: 'Lekkość, spokój, prowadzenie',
    },
    {
      matrix: 'Odcięcie od intuicji',
      divine: 'Jasny kanał intuicyjny',
    },
    {
      matrix: 'Brak poczucia sensu',
      divine: 'Świadomość celu i misji',
    },
  ];

  const testimonials = [
    {
      text: 'Ta wiedza całkowicie zmieniła moje podejście do duchowości. Wreszcie zrozumiałam swoją moc.',
      author: 'Maria K.',
    },
    {
      text: 'E-book jest głębokim przewodnikiem. Każdy fragment otwiera nowe perspektywy.',
      author: 'Anna W.',
    },
    {
      text: 'Czakry, które opisuje autorka, faktycznie istnieją. Ćwiczę z nimi od miesiąca – zmiany są niesamowite.',
      author: 'Katarzyna S.',
    },
    {
      text: 'Wreszcie odpowiedzi, których szukałam. Uważam to za obowiązkową lekturę dla każdej osoby szukającej sensu.',
      author: 'Joanna M.',
    },
    {
      text: 'Wiedza zawarta w e-booku to kluczarz do wyzwolenia naszego pełnego potencjału.',
      author: 'Ewa D.',
    },
    {
      text: 'Odkrywcze i inspirujące. Polecam każdemu, kto chce głębiej zrozumieć swoją duchową naturę.',
      author: 'Helena R.',
    },
  ];

  const CTAButton = ({ id, text = 'Kup e-book – natychmiastowy dostęp' }: { id: string; text?: string }) => (
    <motion.button
      className="mt-6 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-semibold hover:from-green-500 hover:to-blue-500 transition-all duration-300 shadow-xl border border-green-400 font-mono text-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setHoveredCta(id)}
      onMouseLeave={() => setHoveredCta(null)}
    >
      {text}
      {hoveredCta === id && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="block text-xs text-gray-200 mt-1"
        >
          Wyjdź z Matrixu
        </motion.div>
      )}
    </motion.button>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fragments */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent font-mono mb-4">
              Fragmenty z E-booka
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Odkrywcze fragmenty, które zmienią Twoją perspektywę
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12 mb-20">
          {fragments.map((fragment, index) => (
            <ScrollReveal key={fragment.id} delay={0.2 * index}>
              <motion.div
                className="p-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-2xl border border-green-500/30 backdrop-blur-sm"
                whileHover={{ borderColor: 'rgba(34, 197, 94, 0.6)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-200 text-lg leading-relaxed italic font-mono">
                    {fragment.content}
                  </p>
                </div>
                <CTAButton id={fragment.id} text="Dowiedz się więcej o e-booku" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Comparison Table */}
        <ScrollReveal>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent font-mono mb-4">
                Matrix vs Boska Matryca
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Porównanie życia w ograniczeniu i życia w pełnym potencjale
              </p>
            </div>

            <motion.div
              className="overflow-x-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-green-500/50">
                    <th className="px-6 py-4 text-left text-xl font-bold text-red-400 font-mono">
                      Życie w Matrixie
                    </th>
                    <th className="px-6 py-4 text-left text-xl font-bold text-green-400 font-mono">
                      Życie z Boskiej Matrycy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-700/50 hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-300 font-mono">{row.matrix}</td>
                      <td className="px-6 py-4 text-green-300 font-mono font-semibold">
                        {row.divine}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Social Proof */}
        <ScrollReveal>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent font-mono mb-4">
                Co mówią Czytelniczki
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Rzeczywiste doświadczenia osób, które odkryły sekrety wszechświata
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={0.1 * index}>
                  <motion.div
                    className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-blue-500/30 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.6)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <p className="text-gray-200 leading-relaxed mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="text-green-400 font-semibold font-mono text-sm">
                      — {testimonial.author}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Final CTA */}
        <ScrollReveal>
          <motion.div
            className="text-center p-12 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl border border-green-500/50 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-3xl font-bold text-green-300 mb-4 font-mono">
              Gotowa na transformację?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Odkryj pełną moc 22 czakr i wyślizgnij się z ograniczeń Matrixu
            </p>
            <CTAButton id="final-cta" text="Kup e-book teraz – Natychmiastowy dostęp" />
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EbookFragments;

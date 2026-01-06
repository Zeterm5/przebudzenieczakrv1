import React from 'react';
import ScrollReveal from '../ScrollReveal';

const ReturnPolicy = () => {
  return (
    <section id="returns" className="py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent font-mono mb-12 text-center">
            Polityka Zwrotów
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-red-300 mb-4 font-mono">1. Zasady Zwrotów</h2>
              <p className="text-lg font-bold text-red-400 mb-4">
                ❌ NIE OFERUJEMY ZWROTÓW
              </p>
              <p>
                Wszystkie sprzedaże e-booka "Sekrety Wszechświata: 22 Czakry Nowej Ziemi" są ostateczne. Ponieważ
                produkt jest cyfrowy i pozwala na natychmiastowy dostęp do treści, nie oferujemy zwrotów ani
                refundacji po zakupie.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-red-300 mb-4 font-mono">2. Dlaczego Brak Zwrotów?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Produkt jest natychmiast pobierany po zakupie</li>
                <li>Nie możemy wycofać dostępu do treści cyfrowej</li>
                <li>Brak fizycznego produktu do zwrotu</li>
                <li>Zapobieganie oszustwom i nielegalnym kopiom</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-red-300 mb-4 font-mono">3. Problemy Techniczne</h2>
              <p>
                W przypadku problemów technicznych z dostępem do e-booka lub jeśli nie możesz pobrać produktu, prosimy
                o kontakt z naszym zespołem wsparcia. Będziemy starać się rozwiązać problem w ciągu 48 godzin.
              </p>
              <p className="mt-4">
                Email wsparcia: kontakt@example.com<br />
                Godziny obsługi: Poniedziałek - Piątek, 9:00 - 17:00
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-red-300 mb-4 font-mono">4. Duplikaty Zamówień</h2>
              <p>
                Jeśli kupiono przypadkowo duplikat zamówienia, prosimy o niezwłoczny kontakt w ciągu 24 godzin od
                zakupu. W takim przypadku możemy rozpatrzyć zwrot dla duplikatu.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-red-300 mb-4 font-mono">5. Problemy z Płatnością</h2>
              <p>
                Jeśli został pobrany opłata, ale nie masz dostępu do e-booka, prosimy o niezwłoczny kontakt. Będziemy
                pracować nad rozwiązaniem problemu lub refundacją w ciągu 5-7 dni roboczych.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-red-300 mb-4 font-mono">6. Bezpieczeństwo Nieuczciwości</h2>
              <p>
                Zachowujemy prawo do odmowy zwrotu lub refundacji w przypadkach podejrzenia oszustwa, używania VPN do
                obejścia geograficznych ograniczeń lub naruszenia naszych warunków serwisu.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-red-300 mb-4 font-mono">7. Procedura Rozwiązywania Sporów</h2>
              <p>
                W przypadku sporu dotyczącego płatności lub dostępu do e-booka, prosimy o kontakt w ciągu 30 dni.
                Będziemy starać się rozwiązać sprawę w przyjazny sposób. Jeśli nie będzie to możliwe, będziemy stosować
                się do procedur mediacji lub arbitrażu.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-red-300 mb-4 font-mono">8. Kontakt</h2>
              <p>
                W przypadku pytań dotyczących tej Polityki Zwrotów, prosimy o kontakt:
              </p>
              <p className="mt-4">
                Email: kontakt@example.com<br />
                Telefon: +48 123 456 789<br />
                Adres: Polska, Online
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <p className="text-sm text-gray-400">
                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReturnPolicy;

import React from 'react';
import ScrollReveal from '../ScrollReveal';

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent font-mono mb-12 text-center">
            Polityka Prywatności
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-300 mb-4 font-mono">1. Wstęp</h2>
              <p>
                Niniejsza Polityka Prywatności ("Polityka") wyjaśnia, jak gromadzimy, wykorzystujemy, ujawniamy i
                chronimy dane osobowe zbierane od użytkowników naszej strony internetowej ("Strona") oraz e-booka
                ("Usługa"). Nasza organizacja zobowiązuje się do ochrony prywatności i bezpieczeństwa Twoich danych
                osobowych.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-300 mb-4 font-mono">2. Zbierane Dane Osobowe</h2>
              <p>Zbieramy następujące kategorie danych osobowych:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Dane identyfikacyjne: imię, nazwisko, adres e-mail, numer telefonu</li>
                <li>Dane adresowe: adres wysyłki, kod pocztowy, miasto, kraj</li>
                <li>Dane transakcyjne: historia zakupów, kwoty zapłacone</li>
                <li>Dane techniczne: adres IP, typ przeglądarki, typ urządzenia, informacje o klikach</li>
                <li>Dane komunikacyjne: wiadomości wysłane przez formularz kontaktowy</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-300 mb-4 font-mono">3. Cel Zbierania Danych</h2>
              <p>Zbieramy i przetwarzamy Twoje dane osobowe w następujących celach:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Realizacja zamówień i wysyłka e-booka</li>
                <li>Komunikacja z Tobą w sprawie zamówienia lub Usługi</li>
                <li>Obsługa zapytań i udzielanie wsparcia klienta</li>
                <li>Wysyłanie materiałów marketingowych (jeśli wyraziłaś zgodę)</li>
                <li>Analiza i poprawa naszych Usług</li>
                <li>Zapobieganie oszustwom i ochrona bezpieczeństwa</li>
                <li>Zgodność z wymaganiami prawnymi</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-300 mb-4 font-mono">4. Udostępnianie Danych Osobowych</h2>
              <p>
                Nie sprzedajemy, nie wymieniamy i nie udostępniamy Twoich danych osobowych osobom trzecim, z
                wyjątkiem:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Dostawcom usług, którzy wspierają naszą działalność (np. platformy płatności)</li>
                <li>Partnerom logistycznym, jeśli jest to konieczne do realizacji Usługi</li>
                <li>Władzom publicznym, jeśli jest to wymagane przez prawo</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-300 mb-4 font-mono">5. Okres Przechowywania Danych</h2>
              <p>
                Przechowujemy Twoje dane osobowe przez okres niezbędny do realizacji celów, dla których zostały
                zebrane, lub zgodnie z wymogami prawnymi. Jeśli wyraziłaś zgodę na marketing, możemy przechowywać
                dane aż do odwołania tej zgody.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-300 mb-4 font-mono">6. Bezpieczeństwo Danych</h2>
              <p>
                Implementujemy zaawansowane środki bezpieczeństwa, w tym szyfrowanie SSL/TLS, aby chronić Twoje
                dane osobowe przed nieautoryzowanym dostępem, zmianą, ujawnieniem lub zniszczeniem. Wszystkie
                transakcje są szyfrowane.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-300 mb-4 font-mono">7. Twoje Prawa</h2>
              <p>Masz prawo do:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Sprostowania niedokładnych danych</li>
                <li>Usunięcia swoich danych (Prawo do bycia zapomnianym)</li>
                <li>Ograniczenia przetwarzania danych</li>
                <li>Sprzeciwu wobec przetwarzania</li>
                <li>Przenoszenia danych</li>
              </ul>
              <p className="mt-4">
                Aby skorzystać z tych praw, prosimy o kontakt na adres: kontakt@example.com
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-300 mb-4 font-mono">8. Pliki Cookies</h2>
              <p>
                Nasza Strona używa plików cookies do śledzenia preferencji użytkownika i poprawy doświadczenia
                użytkownika. Możesz wyłączyć pliki cookies w ustawieniach przeglądarki.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-300 mb-4 font-mono">9. Kontakt</h2>
              <p>
                Jeśli masz pytania dotyczące tej Polityki Prywatności, prosimy o kontakt:
              </p>
              <p className="mt-4">
                Email: kontakt@example.com<br />
                Telefon: +48 123 456 789
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm">
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

export default PrivacyPolicy;

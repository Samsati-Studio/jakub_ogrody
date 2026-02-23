import { COMPANY } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności",
  robots: { index: false, follow: false },
};

export default function PolitykaPrywatnosci() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-dark">Polityka Prywatności</h1>
      <p className="mb-6 text-sm text-dark/50">Ostatnia aktualizacja: 2025</p>

      <section className="space-y-8 text-dark/80 leading-relaxed">
        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">1. Administrator danych</h2>
          <p>
            Administratorem Twoich danych osobowych jest <strong>{COMPANY.name}</strong>,
            NIP: 501-007-96-03, z siedzibą w Rawiczu. Kontakt:{" "}
            <a href={`mailto:${COMPANY.email}`} className="text-accent hover:underline">
              {COMPANY.email}
            </a>{" "}
            lub{" "}
            <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-accent hover:underline">
              {COMPANY.phone}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">2. Zakres zbieranych danych</h2>
          <p>Za pośrednictwem formularza kontaktowego na stronie zbieramy:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Imię i nazwisko</li>
            <li>Numer telefonu</li>
            <li>Adres e-mail (opcjonalnie)</li>
            <li>Treść wiadomości / opis zlecenia</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">3. Cel przetwarzania danych</h2>
          <p>Twoje dane są przetwarzane wyłącznie w celu:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Odpowiedzi na Twoje zapytanie (art. 6 ust. 1 lit. b RODO — wykonanie umowy/czynności przedumowne),</li>
            <li>Przesłania wyceny lub informacji o usługach,</li>
            <li>Realizacji zleconych usług ogrodniczych.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">4. Czas przechowywania danych</h2>
          <p>
            Dane są przechowywane przez okres niezbędny do realizacji usługi, a następnie przez czas
            wynikający z obowiązków prawnych (np. przepisy podatkowe — do 5 lat). Dane z zapytań, które
            nie zaowocowały zleceniem, są usuwane po 12 miesiącach.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">5. Udostępnianie danych</h2>
          <p>
            Twoje dane nie są sprzedawane ani udostępniane podmiotom trzecim w celach marketingowych.
            Mogą być przekazywane wyłącznie podmiotom świadczącym usługi techniczne niezbędne do
            działania strony (np. dostawca hostingu, usługa e-mail) i tylko w zakresie koniecznym.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">6. Twoje prawa</h2>
          <p>Na podstawie RODO przysługuje Ci prawo do:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>dostępu do swoich danych,</li>
            <li>sprostowania lub uzupełnienia danych,</li>
            <li>usunięcia danych („prawo do bycia zapomnianym"),</li>
            <li>ograniczenia przetwarzania,</li>
            <li>przenoszenia danych,</li>
            <li>wniesienia sprzeciwu wobec przetwarzania,</li>
            <li>wniesienia skargi do Prezesa UODO (uodo.gov.pl).</li>
          </ul>
          <p className="mt-3">
            Aby skorzystać z tych praw, skontaktuj się z nami pod adresem{" "}
            <a href={`mailto:${COMPANY.email}`} className="text-accent hover:underline">
              {COMPANY.email}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">7. Pliki cookies</h2>
          <p>
            Strona może używać plików cookies wyłącznie w celu poprawnego działania (cookies techniczne).
            Nie stosujemy cookies śledzących ani reklamowych. Możesz wyłączyć cookies w ustawieniach
            swojej przeglądarki — nie wpłynie to na dostępność treści strony.
          </p>
        </div>
      </section>

      <div className="mt-12">
        <a href="/" className="text-accent hover:underline text-sm">
          ← Wróć na stronę główną
        </a>
      </div>
    </main>
  );
}

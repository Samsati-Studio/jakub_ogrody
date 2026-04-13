import { COMPANY } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin",
  robots: { index: false, follow: false },
};

export default function Regulamin() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-dark">Regulamin świadczenia usług</h1>
      <p className="mb-6 text-sm text-dark/50">Ostatnia aktualizacja: 2025</p>

      <section className="space-y-8 text-dark/80 leading-relaxed">
        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">1. Postanowienia ogólne</h2>
          <p>
            Niniejszy Regulamin określa zasady świadczenia usług ogrodniczych przez{" "}
            <strong>{COMPANY.name}</strong>, NIP: 501-007-96-03 (dalej: „Wykonawca") na rzecz Klientów.
            Kontakt:{" "}
            <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-accent hover:underline">
              {COMPANY.phone}
            </a>
            ,{" "}
            <a href={`mailto:${COMPANY.email}`} className="text-accent hover:underline">
              {COMPANY.email}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">2. Zakres usług</h2>
          <p>Wykonawca świadczy m.in. następujące usługi:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Projektowanie ogrodów i terenów zielonych,</li>
            <li>Zakładanie ogrodów — nasadzenia, trawniki, elementy małej architektury,</li>
            <li>Pielęgnacja ogrodów (koszenie, przycinanie, nawożenie, odchwaszczanie),</li>
            <li>Montaż automatycznych systemów nawadniania.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">3. Zawarcie umowy</h2>
          <p>
            Umowa zostaje zawarta po: (1) złożeniu zapytania przez Klienta (formularz, telefon, e-mail),
            (2) bezpłatnej konsultacji na miejscu, (3) zaakceptowaniu przez obie strony pisemnej wyceny
            lub kosztorysu. Wykonawca zastrzega sobie prawo do odmowy przyjęcia zlecenia bez podania
            przyczyny.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">4. Realizacja i terminy</h2>
          <p>
            Termin realizacji usługi jest ustalany indywidualnie i potwierdzany pisemnie (e-mail lub SMS).
            Wykonawca dołoży wszelkich starań, aby dotrzymać uzgodnionych terminów. Opóźnienia
            spowodowane siłą wyższą (m.in. warunki atmosferyczne, klęski żywiołowe) nie stanowią
            naruszenia umowy.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">5. Ceny i płatności</h2>
          <p>
            Ceny usług są ustalane indywidualnie na podstawie kosztorysu. Wykonawca może wymagać zaliczki
            w wysokości do 30% wartości zlecenia przed przystąpieniem do prac. Płatność końcowa jest
            wymagalna w dniu zakończenia prac, chyba że strony uzgodnią inaczej. Faktury są wystawiane
            na żądanie Klienta.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">6. Gwarancja na nasadzenia</h2>
          <p>
            Wykonawca udziela 12-miesięcznej gwarancji na wszystkie nasadzenia, pod warunkiem stosowania
            się przez Klienta do zaleceń pielęgnacyjnych przekazanych po zakończeniu prac. Gwarancja
            nie obejmuje szkód wynikłych z zaniedbania, ekstremalnych warunków pogodowych ani działania
            osób trzecich.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">7. Odpowiedzialność</h2>
          <p>
            Wykonawca ponosi odpowiedzialność za szkody wyrządzone z jego winy podczas realizacji usługi.
            Odpowiedzialność jest ograniczona do wartości zlecenia. Wykonawca nie ponosi odpowiedzialności
            za istniejące wady terenu, ukryte instalacje podziemne niezgłoszone przez Klienta ani za
            wyniki uprawy uzależnione od warunków glebowych i klimatycznych.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">8. Rezygnacja i odstąpienie</h2>
          <p>
            Klient może zrezygnować ze zlecenia przed jego realizacją. W przypadku rezygnacji po
            zatwierdzeniu kosztorysu Wykonawca może zatrzymać zaliczkę lub żądać zwrotu poniesionych
            kosztów. W przypadku rezygnacji w trakcie realizacji Klient płaci za wykonaną część prac.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-dark">9. Postanowienia końcowe</h2>
          <p>
            W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy Kodeksu
            Cywilnego. Wszelkie spory strony będą rozstrzygać polubownie, a w razie braku porozumienia —
            przed sądem właściwym dla siedziby Wykonawcy. Regulamin może być aktualizowany — obowiązuje
            wersja dostępna na stronie w dniu zawarcia umowy.
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

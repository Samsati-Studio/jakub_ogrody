import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { COMPANY } from "@/lib/constants";

export default function AboutOwner() {
  return (
    <Section id="o-nas">
      <SectionHeading>O nas</SectionHeading>

      <div className="grid items-center gap-12 md:grid-cols-2">
        <AnimateOnScroll>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/persona.jpg"
              alt={COMPANY.owner}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div>
            <h3 className="mb-2 text-2xl font-bold text-dark">
              {COMPANY.owner}
            </h3>
            <p className="mb-6 text-lg font-medium text-accent">
              Założyciel & Główny Projektant
            </p>
            <div className="space-y-4 text-dark/80">
              <p>
                Cześć! Jestem Jakub i od lat tworzę piękne ogrody na terenie
                Warszawy i okolic. Moja pasja do zieleni i architektury
                krajobrazu pozwala mi realizować projekty, które nie tylko cieszą
                oko, ale też służą przez lata.
              </p>
              <p>
                Każdy ogród traktuję indywidualnie — wsłuchuję się w potrzeby
                klientów i dostosowuję projekt do charakteru miejsca. Wierzę, że
                dobrze zaprojektowany ogród to inwestycja, która z roku na rok
                zyskuje na wartości.
              </p>
              <p>
                Zapraszam do kontaktu — chętnie porozmawiam o Twoim wymarzonym
                ogrodzie i pomogę go stworzyć.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
}

import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { COMPANY } from "@/lib/constants";

export default function AboutOwner() {
  return (
    <Section id="o-nas" className="scroll-mt-16 md:scroll-mt-20 !py-12 md:!py-12">
      <SectionHeading>O nas</SectionHeading>

      <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-5">
        <AnimateOnScroll className="md:col-span-3">
          <div>
            <h3 className="mb-2 text-center text-3xl font-bold text-dark md:text-left">
              {COMPANY.owner}
            </h3>
            <p className="mb-6 text-center text-lg font-medium text-accent md:text-left">
              Założyciel & Główny Projektant
            </p>
            <div className="space-y-4 text-dark/80">
              <p>
                Cześć! Jestem Jakub i od lat tworzę piękne ogrody na terenie
                Rawicza, Leszna i Wrocławia. Moja pasja do zieleni i architektury
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
            <p className="mt-8 text-lg italic text-dark/70">
              Jakub Szymanowicz — Właściciel
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} className="w-full md:col-span-2">
          <div className="relative mx-auto aspect-[3/4] max-h-[500px] max-w-sm overflow-hidden rounded-3xl md:max-w-none">
            <Image
              src="/persona.jpg"
              alt={COMPANY.owner}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
}

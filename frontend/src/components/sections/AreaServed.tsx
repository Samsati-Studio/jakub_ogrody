import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { COMPANY } from "@/lib/constants";

export default function AreaServed() {
  return (
    <Section id="obszar">
      <SectionHeading subtitle="Działamy na terenie Warszawy i okolicznych miejscowości">
        Obszar działania
      </SectionHeading>

      <AnimateOnScroll>
        <div className="flex flex-wrap justify-center gap-3">
          {COMPANY.areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-medium text-primary shadow-sm transition-colors hover:border-accent hover:text-accent"
            >
              {area}
            </span>
          ))}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.2}>
        <p className="mt-8 text-center text-dark/60">
          Obsługujemy również inne miejscowości w promieniu 40 km od Warszawy.
          Skontaktuj się z nami, aby sprawdzić dostępność w Twojej okolicy.
        </p>
      </AnimateOnScroll>
    </Section>
  );
}

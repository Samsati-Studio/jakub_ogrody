import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <Section id="proces">
      <SectionHeading subtitle="Przejrzysty proces od pierwszego kontaktu do gotowego ogrodu">
        Jak pracujemy
      </SectionHeading>

      <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
        {PROCESS_STEPS.map((step, index) => (
          <AnimateOnScroll key={step.step} delay={index * 0.15}>
            <div className="relative text-center">
              {/* Step number */}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                {step.step}
              </div>

              {/* Connector line */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="absolute left-[calc(50%+2rem)] top-7 hidden h-0.5 w-[calc(100%-4rem)] bg-primary/20 md:block" />
              )}

              <h3 className="mb-2 text-lg font-bold text-dark">{step.title}</h3>
              <p className="text-sm text-dark/70">{step.description}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}

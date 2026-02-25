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

      {/* ── Mobile: vertical timeline ── */}
      <div className="md:hidden">
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-primary/20" />

          <div className="space-y-6">
            {PROCESS_STEPS.map((step, index) => (
              <AnimateOnScroll key={step.step} delay={index * 0.1}>
                <div className="relative flex gap-5">
                  {/* Step circle */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-md ring-4 ring-white">
                    {step.step}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 rounded-2xl border border-dark/5 bg-white px-5 py-4 shadow-sm">
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-accent">
                      Krok {step.step}
                    </p>
                    <h3 className="mb-1.5 text-base font-bold text-dark">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-dark/65">{step.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop: horizontal 4-column ── */}
      <div className="hidden md:grid md:grid-cols-4 md:gap-8">
        {PROCESS_STEPS.map((step, index) => (
          <AnimateOnScroll key={step.step} delay={index * 0.15}>
            <div className="relative text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-xl font-bold text-white hover:bg-accent transition-colors duration-300">
                {step.step}
              </div>
              {index < PROCESS_STEPS.length - 1 && (
                <div className="absolute left-[calc(55%+2rem)] top-7 h-0.5 w-[calc(100%-4rem)] bg-primary/20" />
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

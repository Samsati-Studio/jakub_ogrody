"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { PROCESS_STEPS } from "@/lib/constants";

function ProcessStep({
  step,
  index,
  total,
}: {
  step: (typeof PROCESS_STEPS)[0];
  index: number;
  total: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-center">
      {/* Step number */}
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-xl font-bold text-white hover:bg-accent transition-colors duration-300">
        {step.step}
      </div>

      {/* Connector line — desktop only */}
      {index < total - 1 && (
        <div className="absolute left-[calc(55%+2rem)] top-7 hidden h-0.5 w-[calc(100%-4rem)] bg-primary/20 md:block" />
      )}

      <h3 className="mb-2 text-lg font-bold text-dark">{step.title}</h3>

      {/* Description — collapsed on mobile, always visible on desktop */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out text-left ${
          open ? "max-h-96" : "max-h-0 md:max-h-96"
        }`}
      >
        <p className="text-sm text-dark/70">{step.description}</p>
      </div>

      {/* Toggle — mobile only */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-2 mx-auto flex min-h-[44px] items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-dark md:hidden"
      >
        {open ? "Zwiń" : "Czytaj więcej"}
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>
  );
}

export default function Process() {
  return (
    <Section id="proces">
      <SectionHeading subtitle="Przejrzysty proces od pierwszego kontaktu do gotowego ogrodu">
        Jak pracujemy
      </SectionHeading>

      <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
        {PROCESS_STEPS.map((step, index) => (
          <AnimateOnScroll key={step.step} delay={index * 0.15}>
            <ProcessStep step={step} index={index} total={PROCESS_STEPS.length} />
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}

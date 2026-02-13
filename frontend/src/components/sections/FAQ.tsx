"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq">
      <SectionHeading subtitle="Odpowiedzi na najczęściej zadawane pytania">
        Pytania i odpowiedzi
      </SectionHeading>

      <div className="mx-auto max-w-3xl space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <AnimateOnScroll key={index} delay={index * 0.1}>
            <div className="overflow-hidden rounded-xl border border-sage bg-white">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-semibold text-dark">
                  {item.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-dark/70">{item.answer}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}

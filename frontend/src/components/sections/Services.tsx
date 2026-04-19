"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SERVICES } from "@/lib/constants";

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl" style={{ aspectRatio: "4/3" }}>
      {/* Background photo */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 [@media(hover:hover)]:group-hover:scale-105"
      />

      {/* Overlay — na mobile zawsze ciemne, na desktop rozjaśnia się i ciemnieje na hover */}
      <div className="absolute inset-0 bg-black/60 transition-colors duration-400 [@media(hover:hover)]:bg-black/45 [@media(hover:hover)]:group-hover:bg-black/65" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col p-6 sm:p-8">
        {/* Tytuł na górze */}
        <h3 className="text-xl font-bold text-white drop-shadow-sm">
          {service.title}
        </h3>

        {/* Separator */}
        <div className="mt-3 h-px w-16 bg-white/70 transition-all duration-400 [@media(hover:hover)]:w-10 [@media(hover:hover)]:bg-white/40 [@media(hover:hover)]:group-hover:w-16 [@media(hover:hover)]:group-hover:bg-white/70" />

        {/* Opis — na mobile zawsze widoczny, na desktop pojawia się na hover */}
        <p className="mt-3 text-sm leading-relaxed text-white/90 transition-all duration-400 [@media(hover:hover)]:text-white/0 [@media(hover:hover)]:group-hover:text-white/90 line-clamp-2">
          {service.description}
        </p>

        {/* Bullets */}
        <ul className="mt-auto space-y-2">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-sm text-white transition-colors duration-400 [@media(hover:hover)]:text-white/90 [@media(hover:hover)]:group-hover:text-white">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-accent transition-colors duration-400 [@media(hover:hover)]:text-white/50 [@media(hover:hover)]:group-hover:text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <Section id="uslugi" className="bg-light">
      <SectionHeading subtitle="Kompleksowa oferta usług ogrodniczych">
        Nasze usługi
      </SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <AnimateOnScroll key={service.title} delay={index * 0.1}>
            <ServiceCard service={service} />
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}

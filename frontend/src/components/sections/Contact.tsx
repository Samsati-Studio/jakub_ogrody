"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { COMPANY, SERVICES } from "@/lib/constants";
import { contactSchema } from "@/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";

const FAQ_CONTACT = [
  {
    question: "Ile kosztuje projekt ogrodu?",
    answer: "Koszt projektu zależy od wielkości działki. Ceny zaczynają się od 2000 zł. Dokładną wycenę przygotujemy po bezpłatnej konsultacji.",
  },
  {
    question: "W jakim obszarze działacie?",
    answer: "Działamy w Rawiczu, Lesznie i okolicach w promieniu 40 km od naszej bazy.",
  },
  {
    question: "Czy oferujecie gwarancję na nasadzenia?",
    answer: "Tak, na wszystkie nasadzenia udzielamy 12-miesięcznej gwarancji przy zachowaniu zasad pielęgnacji.",
  },
  {
    question: "Kiedy najlepiej zacząć prace ogrodnicze?",
    answer: "Najlepszy czas to wiosna i jesień. Projektowanie warto zacząć zimą, by ruszyć z realizacją w marcu.",
  },
];

export default function Contact() {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setServerError("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const raw = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      serviceType: formData.get("serviceType") as string,
      message: formData.get("message") as string,
    };

    const result = contactSchema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: Record<string, string[]> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        if (!fieldErrors[field]) fieldErrors[field] = [];
        fieldErrors[field].push(issue.message);
      }
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitContactForm(formData);
      if (response.success) router.push("/thank-you");
      else {
        if (response.errors) setErrors(response.errors);
        else setServerError(response.message);
      }
    } catch {
      setServerError("Wystąpił błąd. Spróbuj ponownie lub zadzwoń do nas.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // PRZYWRÓCONE TWOJE ORYGINALNE KLASY
  const inputClass = "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-dark transition-all focus:border-accent focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent/30";
  const labelClass = "mb-1 block text-sm font-medium text-dark";
  const errorClass = "mt-1 text-sm text-red-600";

  return (
    <Section id="kontakt" className="scroll-mt-24 lg:py-16">
      <SectionHeading subtitle="Wypełnij formularz, a odezwiemy się do Ciebie w ciągu 24 godzin. Możesz też zadzwonić bezpośrednio.">
        Kontakt
      </SectionHeading>

      <div className="mx-auto max-w-7xl flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        {/* LEWA KOLUMNA — FAQ + INFO */}
        <AnimateOnScroll className="space-y-8">

            <div className="mb-8 my-6 md:my-8">
              <h3 className="text-2xl font-bold text-dark">Najczęściej zadawane pytania</h3>
            </div>

          <div className="space-y-5">
            {FAQ_CONTACT.map((item, index) => (
              <div key={index} className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${openFaq === index ? "border-accent/20" : "border-slate-200"}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-dark">{item.question}</span>
                  <svg className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className={`grid transition-all duration-300 ${openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-4 text-dark/70 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg></div>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="font-medium text-dark hover:text-accent">{COMPANY.phone}</a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></div>
              <a href={`mailto:${COMPANY.email}`} className="font-medium text-dark hover:text-accent">{COMPANY.email}</a>
            </div>
          </div>
        </AnimateOnScroll>

        {/* PRAWA KOLUMNA — FORMULARZ (Styl oryginalny, układ skompaktowany) */}
        <AnimateOnScroll delay={0.2} className="w-full">
          <form onSubmit={handleSubmit} className="w-full space-y-4 rounded-3xl bg-white p-8 shadow-2xl border border-dark/5 border-t-4 border-t-accent lg:p-10">
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-dark">Darmowa wycena</h3>
              <p className="text-sm text-dark/60">Zostaw dane, odezwiemy się w ciągu 24h.</p>
            </div>
            {serverError && <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">{serverError}</div>}
          
            {/* Imię i Telefon w jednym rzędzie dla oszczędności miejsca */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={labelClass}>Imię i nazwisko *</label>
                <input id="name" name="name" type="text" required className={inputClass} placeholder="Jan Kowalski" />
                {errors.name && <p className={errorClass}>{errors.name[0]}</p>}
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Telefon *</label>
                <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="123 456 789" />
                {errors.phone && <p className={errorClass}>{errors.phone[0]}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className={labelClass}>Email (opcjonalnie)</label>
                <input id="email" name="email" type="email" className={inputClass} placeholder="jan@example.pl" />
              </div>
              <div>
                <label htmlFor="serviceType" className={labelClass}>Rodzaj usługi</label>
                <select id="serviceType" name="serviceType" className={inputClass}>
                  <option value="">Wybierz usługę</option>
                  {SERVICES.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>Wiadomość *</label>
              <textarea id="message" name="message" required rows={3} className={`${inputClass} resize-none`} placeholder="Opisz swoje potrzeby..." />
              {errors.message && <p className={errorClass}>{errors.message[0]}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-accent px-8 py-4 font-semibold text-white transition-all hover:bg-accent-dark disabled:opacity-50"
            >
              {isSubmitting ? "Wysyłanie..." : "Odbierz darmową wycenę"}
            </button>
          </form>
        </AnimateOnScroll>
      </div>
    </Section>
  );
}
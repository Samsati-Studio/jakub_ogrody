"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { COMPANY, SERVICES } from "@/lib/constants";
import { contactSchema } from "@/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";

export default function Contact() {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setServerError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Client-side validation
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
      if (response.success) {
        router.push("/thank-you");
      } else {
        if (response.errors) {
          setErrors(response.errors);
        } else {
          setServerError(response.message);
        }
      }
    } catch {
      setServerError(
        "Wystąpił nieoczekiwany błąd. Spróbuj ponownie lub zadzwoń do nas."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-dark transition-all focus:border-accent focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent/30";
  const labelClass = "mb-1 block text-sm font-medium text-dark";
  const errorClass = "mt-1 text-sm text-red-600";

  return (
    <Section id="kontakt" className="bg-sage">
      <SectionHeading subtitle="Skontaktuj się z nami, aby umówić bezpłatną konsultację">
        Kontakt
      </SectionHeading>

      <div className="grid gap-12 md:grid-cols-12 items-start">
        {/* Contact info */}
        <AnimateOnScroll className="md:col-span-5">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-xl font-bold text-dark">
                Porozmawiajmy o Twoim ogrodzie
              </h3>
              <p className="text-dark/70">
                Wypełnij formularz, a odezwiemy się do Ciebie w ciągu 24 godzin.
                Możesz też zadzwonić bezpośrednio.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="font-medium text-dark hover:text-accent"
                >
                  {COMPANY.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="font-medium text-dark hover:text-accent"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-dark">{COMPANY.address}</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Form */}
        <AnimateOnScroll delay={0.2} className="md:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl bg-white p-6 shadow-xl shadow-gray-200/50 border border-gray-100 md:p-10"
          >
            {serverError && (
              <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
                {serverError}
              </div>
            )}

            <div>
              <label htmlFor="name" className={labelClass}>
                Imię i nazwisko *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={inputClass}
                placeholder="Jan Kowalski"
              />
              {errors.name && <p className={errorClass}>{errors.name[0]}</p>}
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Telefon *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className={inputClass}
                placeholder="123 456 789"
              />
              {errors.phone && <p className={errorClass}>{errors.phone[0]}</p>}
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email (opcjonalnie)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={inputClass}
                placeholder="jan@example.pl"
              />
              {errors.email && <p className={errorClass}>{errors.email[0]}</p>}
            </div>
            <div>
              <label htmlFor="serviceType" className={labelClass}>
                Rodzaj usługi
              </label>
              <select id="serviceType" name="serviceType" className={inputClass}>
                <option value="">Wybierz usługę</option>
                {SERVICES.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Wiadomość *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className={inputClass}
                placeholder="Opisz swoje potrzeby..."
              />
              {errors.message && (
                <p className={errorClass}>{errors.message[0]}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Wysyłanie..." : "Odbierz darmową wycenę"}
            </button>
          </form>
        </AnimateOnScroll>
      </div>
    </Section>
  );
}

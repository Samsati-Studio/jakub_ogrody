import { getTestimonials } from "@/lib/sanity.queries";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialsMarquee from "./TestimonialsMarquee";

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <Section id="opinie" className="bg-sage">
      <SectionHeading subtitle="Co mówią o nas nasi klienci">
        Opinie klientów
      </SectionHeading>

      {testimonials.length === 0 ? (
        <p className="text-center text-dark/60">
          Opinie są w przygotowaniu. Wróć wkrótce!
        </p>
      ) : (
        <TestimonialsMarquee
          testimonials={testimonials}
          duration={45}
          repeat={4}
          pauseOnHover
        />
      )}
    </Section>
  );
}

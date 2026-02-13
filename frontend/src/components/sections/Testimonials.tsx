import { getTestimonials } from "@/lib/sanity.queries";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import StarRating from "@/components/ui/StarRating";

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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={testimonial._id} delay={index * 0.1}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
                <StarRating rating={testimonial.rating} className="mb-4" />
                <blockquote className="mb-4 flex-1 text-dark/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-sage pt-4">
                  <p className="font-semibold text-dark">{testimonial.name}</p>
                  {testimonial.location && (
                    <p className="text-sm text-dark/60">
                      {testimonial.location}
                    </p>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      )}
    </Section>
  );
}

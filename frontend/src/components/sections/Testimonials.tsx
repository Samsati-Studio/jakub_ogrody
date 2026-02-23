import { getTestimonials } from "@/lib/sanity.queries";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialsMarquee from "./TestimonialsMarquee";
import type { Testimonial } from "@/types/sanity";

const PLACEHOLDER_TESTIMONIALS: Testimonial[] = [
  {
    _id: "t-1",
    name: "Damian",
    location: "Wschowa",
    quote: "Dobra robota, fachowo, super dokładnie, polecam.",
    rating: 5,
    featured: true,
  },
  {
    _id: "t-2",
    name: "Tadeusz",
    location: "Jaczów",
    quote: "Bardzo polecam firmę która wykonała wycięcie drzew i przecięła krzewy. Dokładność, staranność oraz rzetelność i wiarygodność cechują tę firmę. Elastyczna i przystępna podczas negocjacji cenowych i terminowych. Polecam.",
    rating: 5,
    featured: true,
  },
  {
    _id: "t-3",
    name: "Krystian",
    location: "Głogów",
    quote: "Usługa wykonana profesjonalnie, według wcześniejszych ustaleń. Obsługa bardzo miła i dokładna. Polecamy.",
    rating: 5,
    featured: true,
  },
  {
    _id: "t-4",
    name: "JW",
    location: "Wąsosz",
    quote: "Robota wykonana fachowo i w terminie. Wykonywany był komplet zabiegów na zmęczonym życiem trawniku ok. 700 m².",
    rating: 5,
    featured: true,
  },
  {
    _id: "t-5",
    name: "Ewa B.",
    location: "Żmigródek",
    quote: "Profesjonalnie wykonana usługa cięcia drzewek owocowych, oprysk oraz wywóz pozostałości po cięciu. Pan Jakub pomalował również powierzchnię po cięciu większych gałęzi.",
    rating: 5,
    featured: true,
  },
  {
    _id: "t-6",
    name: "Ela",
    location: "Głogów",
    quote: "Jestem bardzo zadowolona z wykonanej bardzo fachowo, szybko i bezpiecznie pracy. Polecam firmę każdemu kto chciałby zlecić wykonanie takiej operacji. Firma posiada odpowiedni sprzęt do każdego rodzaju zadania. Nie zapłaciłam również wysokiej ceny.",
    rating: 5,
    featured: true,
  },
  {
    _id: "t-7",
    name: "Renia",
    location: "Sława",
    quote: "Jestem bardzo zadowolona z pracy pana Jakuba. Mieliśmy do ścięcia parę drzew z którymi nie poradzili sobie inni, a ta firma dała sobie super radę. Polecam.",
    rating: 5,
    featured: true,
  },
  {
    _id: "t-8",
    name: "Lidia",
    location: "Leszno",
    quote: "Zdecydowanie polecam usługi tej firmy. Wszystko odbyło się sprawnie, zlecenie wykonane bezproblemowo i w terminie. Bardzo miła obsługa.",
    rating: 5,
    featured: false,
  },
  {
    _id: "t-9",
    name: "Daria P.",
    quote: "Wszystko zgodnie z ustaleniami, jestem bardzo zadowolona ze współpracy, na pewno będę korzystać częściej z usług firmy Pana Jakuba, polecam.",
    rating: 5,
    featured: false,
  },
  {
    _id: "t-10",
    name: "Grzegorz B.",
    quote: "Bardzo rzetelna i profesjonalna firma, polecam.",
    rating: 5,
    featured: false,
  },
];

export default async function Testimonials() {
  const cmsTestimonials = await getTestimonials();
  const testimonials = cmsTestimonials.length > 0 ? cmsTestimonials : PLACEHOLDER_TESTIMONIALS;

  return (
    <Section id="opinie" className="bg-light">
      <SectionHeading subtitle="Co mówią o nas nasi klienci">
        Opinie klientów
      </SectionHeading>

      <TestimonialsMarquee
        testimonials={testimonials}
        duration={165}
        repeat={4}
        pauseOnHover
      />
    </Section>
  );
}

import JsonLd from "@/components/JsonLd";
import Hero from "@/components/sections/Hero";
import WhyUs, { WhyUsMobile } from "@/components/sections/WhyUs";
import AboutOwner from "@/components/sections/AboutOwner";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import AreaServed from "@/components/sections/AreaServed";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <WhyUs />
      <WhyUsMobile />
      <AboutOwner />
      <Services />
      <Process />
      <Gallery />
      <Testimonials />
      <AreaServed />
      <FAQ />
      <Contact />
    </>
  );
}

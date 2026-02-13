import { COMPANY } from "@/lib/constants";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    description: COMPANY.description,
    url: COMPANY.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Warszawa",
      addressCountry: "PL",
    },
    areaServed: COMPANY.areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: [
      "Projektowanie ogrodów",
      "Zakładanie ogrodów",
      "Pielęgnacja ogrodów",
      "Systemy nawadniania",
      "Oświetlenie ogrodowe",
    ],
    priceRange: "$$",
    image: `${COMPANY.url}/og-image.jpg`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

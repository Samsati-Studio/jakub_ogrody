import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://szymanowiczogrody.pl"),
  title: {
    default: `${COMPANY.shortName} — Usługi Ogrodnicze | Rawicz, Leszno, Wrocław`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description: COMPANY.description,
  keywords: [
    "usługi ogrodnicze",
    "projektowanie ogrodów",
    "zakładanie ogrodów",
    "pielęgnacja ogrodów",
    "ogrodnik Rawicz",
    "ogrodnik Leszno",
    "ogrodnik Wrocław",
    "ogrody Rawicz",
    "ogrody Leszno",
    "ogrody Wrocław",
    "zakładanie ogrodów Rawicz",
    "zakładanie ogrodów Leszno",
    "zakładanie ogrodów Wrocław",
    "projektowanie ogrodów Rawicz",
    "projektowanie ogrodów Leszno",
    "projektowanie ogrodów Wrocław",
    "pielęgnacja ogrodu Rawicz",
    "nawadnianie ogrodów",
    "systemy nawadniania ogrodów",
    "trawnik z rolki",
    "architekt krajobrazu",
    "Szymanowicz Ogrody",
    "Jakub Szymanowicz ogrodnik",
  ],
  authors: [{ name: COMPANY.owner }],
  openGraph: {
    title: `${COMPANY.shortName} — Usługi Ogrodnicze | Rawicz, Leszno, Wrocław`,
    description: COMPANY.description,
    url: COMPANY.url,
    siteName: COMPANY.shortName,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og_image.jpg",
        width: 1920,
        height: 1080,
        alt: COMPANY.shortName,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapeService",
  "name": COMPANY.name,
  "description": COMPANY.description,
  "image": `${COMPANY.url}/og_image.jpg`,
  "@id": COMPANY.url,
  "url": COMPANY.url,
  "telephone": COMPANY.phone,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rawicz",
    "postalCode": "63-900",
    "addressCountry": "PL",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.608,
    "longitude": 16.858,
  },
  "areaServed": COMPANY.areas.map((city) => ({
    "@type": "City",
    "name": city,
  })),
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "07:00",
    "closes": "18:00",
  },
  "priceRange": "zł zł",
  "sameAs": [
    "https://www.facebook.com/p/Us%C5%82ugi-Ogrodnicze-Jakub-Szymanowicz-100054396765237/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="bg-white">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

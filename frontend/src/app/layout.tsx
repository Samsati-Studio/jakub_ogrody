import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.shortName} — Usługi Ogrodnicze Warszawa`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description: COMPANY.description,
  keywords: [
    "usługi ogrodnicze",
    "projektowanie ogrodów",
    "zakładanie ogrodów",
    "pielęgnacja ogrodów",
    "ogrodnik Warszawa",
    "ogrody Piaseczno",
    "architekt krajobrazu",
  ],
  authors: [{ name: COMPANY.owner }],
  openGraph: {
    title: `${COMPANY.shortName} — Usługi Ogrodnicze Warszawa`,
    description: COMPANY.description,
    url: COMPANY.url,
    siteName: COMPANY.shortName,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: COMPANY.shortName,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

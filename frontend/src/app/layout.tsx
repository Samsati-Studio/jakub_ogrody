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
  title: {
    default: `${COMPANY.shortName} — Usługi Ogrodnicze Rawicz`,
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
    "ogrody Wrocław",
    "architekt krajobrazu",
  ],
  authors: [{ name: COMPANY.owner }],
  openGraph: {
    title: `${COMPANY.shortName} — Usługi Ogrodnicze Rawicz`,
    description: COMPANY.description,
    url: COMPANY.url,
    siteName: COMPANY.shortName,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/mariakray-gardening-6803874_1920.jpg",
        width: 1920,
        height: 1280,
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
        <main className="bg-white">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

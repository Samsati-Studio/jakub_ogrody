import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Dziękujemy",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-md">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
          <svg
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-dark">
          Dziękujemy za wiadomość!
        </h1>
        <p className="mb-8 text-dark/70">
          Twoje zapytanie zostało wysłane. Skontaktujemy się z Tobą najszybciej
          jak to możliwe — najczęściej w ciągu 24 godzin.
        </p>
        <Button href="/">Wróć na stronę główną</Button>
      </div>
    </div>
  );
}

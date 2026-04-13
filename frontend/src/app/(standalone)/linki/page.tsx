import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Szymanowicz Ogrody — Kontakt i Social Media",
  robots: { index: false, follow: false },
};

const PHONE = "+48607871019";
const PHONE_DISPLAY = "+48 607 871 019";
const EMAIL = "kontakt@ogrodyszymanowicz.pl";
const FACEBOOK = "https://www.facebook.com/p/Us%C5%82ugi-Ogrodnicze-Jakub-Szymanowicz-100054396765237/";
const INSTAGRAM = "https://www.instagram.com/szymanowicz_ogrody/";
const WHATSAPP = `https://wa.me/${PHONE.replace(/\D/g, "")}`;
const WEBSITE = "https://ogrodyszymanowicz.pl";

/* ── Icons ─────────────────────────────────────────── */

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden>
      <path d="M22 12a10 10 0 1 0-11.563 9.875v-6.988H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.887h-2.33v6.988A10.002 10.002 0 0 0 22 12Z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0" aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0 opacity-60" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ── Button variants ────────────────────────────────── */

interface LinkBtnProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  variant?: "accent" | "primary" | "outline";
}

function LinkBtn({ href, icon, label, sublabel, variant = "outline" }: LinkBtnProps) {
  const base =
    "group flex items-center gap-3.5 w-full rounded-full px-5 py-3.5 font-semibold transition-all duration-200 active:scale-[0.97]";

  const variantClass = {
    accent: `${base} bg-accent text-white hover:bg-accent-dark shadow-md hover:shadow-lg`,
    primary: `${base} bg-primary text-white hover:bg-primary-light`,
    outline: `${base} bg-white text-dark border-2 border-sage-dark hover:border-primary hover:bg-light`,
  }[variant];

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={variantClass}>
      <span className={variant === "outline" ? "text-primary" : "text-white/90"}>
        {icon}
      </span>
      <span className="flex flex-col flex-1 min-w-0">
        <span className="text-sm leading-tight">{label}</span>
        {sublabel && (
          <span className={`text-xs mt-0.5 truncate ${variant === "outline" ? "text-dark/50" : "text-white/70"}`}>
            {sublabel}
          </span>
        )}
      </span>
      <IconArrow />
    </a>
  );
}

/* ── Page ───────────────────────────────────────────── */

export default function LinkiPage() {
  return (
    <main className="font-sans min-h-screen bg-light flex flex-col">
      {/* Header — matches site's dark green brand feel */}
      <header className="bg-primary px-6 py-8 flex flex-col items-center gap-4">
        <Image
          src="/Logo_Jakub_Ogrody.svg"
          alt="Szymanowicz Ogrody"
          width={280}
          height={74}
          priority
          className="h-16 w-auto brightness-0 invert"
        />
        <div className="text-center">
          <p className="text-white/70 text-sm">Usługi ogrodnicze · Rawicz · Leszno · Wrocław</p>
        </div>
      </header>

      {/* Links */}
      <div className="flex-1 flex flex-col items-center px-5 py-8">
        <div className="w-full max-w-sm flex flex-col gap-3">

          {/* Primary CTA */}
          <LinkBtn
            href={`tel:${PHONE}`}
            icon={<IconPhone />}
            label="Zadzwoń do nas"
            sublabel={PHONE_DISPLAY}
            variant="accent"
          />

          <LinkBtn
            href={WHATSAPP}
            icon={<IconWhatsApp />}
            label="WhatsApp"
            sublabel={PHONE_DISPLAY}
            variant="primary"
          />

          <LinkBtn
            href={`mailto:${EMAIL}`}
            icon={<IconMail />}
            label="E-mail"
            sublabel={EMAIL}
          />

          {/* Divider */}
          <div className="flex items-center gap-3 py-1">
            <div className="flex-1 h-px bg-sage-dark" />
            <span className="text-xs text-dark/40 font-medium">Social media</span>
            <div className="flex-1 h-px bg-sage-dark" />
          </div>

          <LinkBtn
            href={FACEBOOK}
            icon={<IconFacebook />}
            label="Facebook"
            sublabel="Usługi Ogrodnicze Jakub Szymanowicz"
          />

          <LinkBtn
            href={INSTAGRAM}
            icon={<IconInstagram />}
            label="Instagram"
            sublabel="@szymanowicz_ogrody"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center">
        <a
          href={WEBSITE}
          className="text-xs text-dark/40 hover:text-primary transition-colors"
        >
          ogrodyszymanowicz.pl
        </a>
      </footer>
    </main>
  );
}

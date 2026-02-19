"use client";

import Image from "next/image";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

/* ─── Single place to tweak every footer style ─── */
const styles = {
  // Typography
  heading:
    "mb-3 text-sm font-medium text-white",
  headingLg: "mb-2 text-lg font-semibold text-white",
  body: "text-sm text-white/70",
  bodyRelaxed: "mb-4 text-sm leading-relaxed text-white/70",
  muted: "text-xs text-white/40",
  mutedLight: "text-xs text-white/50",

  // Links
  navLink: "text-white/70 transition-colors hover:text-accent",
  contactLink: "block text-accent transition-colors hover:text-accent-dark",
  bottomLink: "transition-colors hover:text-white/80",

  // Social icon button
  socialIcon:
    "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-accent hover:text-white",

  // Area tag
  areaTag: "rounded-full bg-white/10 px-3 py-1 text-xs text-white/70",

  // CTA button
  cta: "inline-block rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl",

  // Layout
  footer: "border-t border-white/10 bg-primary text-white",
  container: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8",
  grid: "grid gap-10 sm:grid-cols-2 lg:grid-cols-4",
  bottomBar:
    "mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row",
  separator: "text-white/20",
} as const;

/* ─── Data ─── */
const firmaLinks = NAV_LINKS.filter((l) =>
  ["#o-nas", "#opinie", "#kontakt"].includes(l.href)
);
const uslugiLinks = NAV_LINKS.filter((l) =>
  ["#uslugi", "#realizacje"].includes(l.href)
);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ─── Reusable nav list ─── */
function NavGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className={styles.heading}>{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Brand & Authority */}
          <div>
            <Image
              src="/Logo_Jakub_Ogrody.svg"
              alt={COMPANY.shortName}
              width={210}
              height={56}
              className="mb-4 h-10 w-auto brightness-0 invert"
            />
            <p className={styles.bodyRelaxed}>
              Tworzymy ogrody, które cieszą przez lata. Profesjonalne
              podejście, pasja do zieleni i dbałość o każdy detal.
            </p>
            <div className="space-y-1">
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className={styles.contactLink}
              >
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className={styles.contactLink}
              >
                {COMPANY.email}
              </a>
            </div>
            <p className={`mt-4 ${styles.muted}`}>
              NIP: 000-000-00-00 · REGON: 000000000
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <NavGroup title="Firma" links={firmaLinks} />
            <NavGroup title="Usługi" links={uslugiLinks} />
          </div>

          {/* Column 3: Trust Signals & Areas */}
          <div>
            <h3 className={styles.heading}>Obsługiwane obszary</h3>
            <div className="mb-6 flex flex-wrap gap-2">
              {COMPANY.areas.map((area) => (
                <span key={area} className={styles.areaTag}>
                  {area}
                </span>
              ))}
            </div>

            <h3 className={styles.heading}>Znajdź nas</h3>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>

            <div className={`mt-4 flex items-center gap-2 ${styles.mutedLight}`}>
              <svg
                className="h-4 w-4 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>Gwarancja jakości na wszystkie usługi</span>
            </div>
          </div>

          {/* Column 4: CTA */}
          <div>
            <h3 className={styles.headingLg}>Gotowy na nowy ogród?</h3>
            <p className={`mb-4 ${styles.body}`}>
              Skontaktuj się z nami i umów bezpłatną wycenę. Pomożemy Ci
              stworzyć ogród marzeń.
            </p>
            <a href="#kontakt" className={styles.cta}>
              Umów darmową wycenę
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>
            &copy; {currentYear} {COMPANY.name}. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className={styles.bottomLink}>
              Polityka Prywatności
            </a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.bottomLink}>
              Regulamin
            </a>
            <span className={styles.separator}>|</span>
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1 ${styles.bottomLink}`}
              aria-label="Wróć na górę"
            >
              Na górę
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

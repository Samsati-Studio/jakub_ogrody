import Image from "next/image";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company info */}
          <div>
            <Image
              src="/Logo_Jakub_Ogrody.svg"
              alt={COMPANY.shortName}
              width={180}
              height={48}
              className="mb-4 h-10 w-auto brightness-0 invert"
            />
            <p className="mb-2 text-white/80">{COMPANY.name}</p>
            <p className="text-white/80">{COMPANY.address}</p>
            <div className="mt-4 space-y-1">
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="block text-accent transition-colors hover:text-accent-dark"
              >
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="block text-accent transition-colors hover:text-accent-dark"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Nawigacja</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas served */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Obsługiwane obszary</h3>
            <div className="flex flex-wrap gap-2">
              {COMPANY.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>
            &copy; {currentYear} {COMPANY.name}. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

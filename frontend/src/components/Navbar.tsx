"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#hero" className="block">
            <Image
              src="/Logo_Jakub_Ogrody.svg"
              alt={COMPANY.shortName}
              width={160}
              height={42}
              priority
              className={`h-9 w-auto transition-all duration-300 md:h-11 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-dark" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              {COMPANY.phone}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Menu nawigacji"
          >
            <span
              className={`block h-0.5 w-6 transition-all ${
                isMobileOpen
                  ? "translate-y-2 rotate-45 bg-dark"
                  : isScrolled
                    ? "bg-dark"
                    : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${
                isMobileOpen
                  ? "opacity-0"
                  : isScrolled
                    ? "bg-dark"
                    : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all ${
                isMobileOpen
                  ? "-translate-y-2 -rotate-45 bg-dark"
                  : isScrolled
                    ? "bg-dark"
                    : "bg-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white md:hidden">
          <div className="flex flex-col items-center gap-6 px-4 pt-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-lg font-medium text-dark transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="mt-4 rounded-full bg-accent px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videos = [mobileVideoRef, desktopVideoRef]
      .map((ref) => ref.current)
      .filter(Boolean) as HTMLVideoElement[];

    const tryPlay = (video: HTMLVideoElement) => {
      video.play().catch(() => {
        // Autoplay blocked — retry on first user interaction
        const handleInteraction = () => {
          video.play().catch(() => {});
        };
        document.addEventListener("touchstart", handleInteraction, { once: true });
        document.addEventListener("click", handleInteraction, { once: true });
      });
    };

    videos.forEach(tryPlay);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-dvh items-center bg-black [will-change:transform]">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Mobile: video */}
        <video
          ref={mobileVideoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/hero_poster.jpg"
          className="absolute inset-0 h-full w-full object-cover sm:hidden [transform:translate3d(0,0,0)] [backface-visibility:hidden]"
        >
          <source src="/jakub_garden_mobile.mp4" type="video/mp4" />
        </video>

        {/* Desktop: video */}
        <video
          ref={desktopVideoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/hero_poster.jpg"
          className="hidden h-full w-full object-cover sm:block [transform:translate3d(0,0,0)] [backface-visibility:hidden]"
        >
          <source src="/jakub_garden.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-center text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
            Tworzymy ogrody,
            <br />
            <span className="text-accent">które zachwycają</span>
          </h1>
          <p className="items-center text-center mx-auto 
          mt-6 max-w-xl text-lg text-white/80 md:text-xl">
            {COMPANY.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-8 sm:flex-row">
            {/* Przycisk Główny */}
            <Button 
              href="#kontakt" 
              className="px-8 py-4 text-base sm:px-12 sm:py-5 sm:text-lg font-bold"
            >
              Bezpłatna wycena
            </Button>

            {/* Przycisk Wtórny */}
            <Button
              href="#realizacje"
              variant="ghost"
              className="px-8 py-4 text-base sm:px-12 sm:py-5 sm:text-lg font-bold"
            >
              Zobacz realizacje
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="h-10 w-6 rounded-full border-2 border-white/50"
        >
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}

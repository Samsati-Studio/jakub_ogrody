"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center">
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="persona.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/jakub_garden.mp4" type="video/mp4" />
        </video>
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
          mt-6 max-w-xl text-lm text-white/80 md:text-xl">
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
              variant="secondary"
              className="px-8 py-4 text-base sm:px-12 sm:py-5 sm:text-lg font-bold"
            >
              Zobacz realizacje
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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

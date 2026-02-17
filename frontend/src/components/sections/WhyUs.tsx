"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  experience: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  clock: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  quality: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
};

export default function WhyUs() {
  return (
    <motion.div
      id="dlaczego-my"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="py-4"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="hidden md:flex items-center justify-center gap-10">
          {WHY_US.map((item, index) => (
            <div key={item.title} className="flex items-center gap-10">
              <div className="flex items-center gap-2.5">
                <div className="text-accent">{iconMap[item.icon]}</div>
                <span className="text-sm font-semibold uppercase tracking-widest text-dark/70">{item.title}</span>
              </div>
              {index < WHY_US.length - 1 && (
                <span className="text-accent/30">|</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex md:hidden items-center justify-center gap-6">
          {WHY_US.map((item, index) => (
            <div key={item.title} className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="text-accent">{iconMap[item.icon]}</div>
                <span className="text-xs font-semibold uppercase tracking-widest text-dark/70">{item.title}</span>
              </div>
              {index < WHY_US.length - 1 && (
                <span className="text-accent/30">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

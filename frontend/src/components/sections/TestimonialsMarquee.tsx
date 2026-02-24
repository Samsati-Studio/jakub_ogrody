"use client";

import { Marquee } from "@/components/ui/Marquee";
import StarRating from "@/components/ui/StarRating";
import type { Testimonial } from "@/types/sanity";

interface TestimonialsMarqueeProps {
  testimonials: Testimonial[];
  /** Duration in seconds */
  duration?: number;
  repeat?: number;
  pauseOnHover?: boolean;
}

export default function TestimonialsMarquee({
  testimonials,
  duration = 45,
  repeat = 4,
  pauseOnHover = true,
}: TestimonialsMarqueeProps) {
  if (testimonials.length === 0) return null;

  return (
    <Marquee
      repeat={repeat}
      duration={duration}
      gap="2.5rem"
      pauseOnHover={pauseOnHover}
      className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
    >
      <div className="flex shrink-0 gap-10">
        {testimonials.map((t) => (
          <div
            key={t._id}
            className="flex w-[380px] sm:w-[440px] shrink-0 flex-col rounded-2xl border border-dark/5 bg-white px-6 py-3 shadow-[0_4px_32px_rgba(0,0,0,0.07),0_1px_6px_rgba(0,0,0,0.04)]"
          >
            <StarRating rating={t.rating} className="mb-1.5" />
            <blockquote className="mb-2 flex-1 text-sm leading-snug text-slate-600">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="border-t border-dark/5 pt-2">
              <p className="font-semibold text-dark">{t.name}</p>
              {t.location && (
                <p className="text-xs text-slate-500">{t.location}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Marquee>
  );
}

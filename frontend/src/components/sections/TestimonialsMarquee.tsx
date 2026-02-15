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
      gap="1.5rem"
      pauseOnHover={pauseOnHover}
      className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
    >
      <div className="flex shrink-0 gap-6">
        {testimonials.map((t) => (
          <div
            key={t._id}
            className="flex w-[320px] shrink-0 flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <StarRating rating={t.rating} className="mb-3" />
            <blockquote className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="border-t border-slate-100 pt-3">
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

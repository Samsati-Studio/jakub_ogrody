"use client";

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  /** Duration in seconds, e.g. 40 */
  duration?: number;
  /** Gap between repeated items (CSS value), e.g. "2rem" */
  gap?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  repeat = 4,
  duration = 40,
  gap = "1.5rem",
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("overflow-hidden", pauseOnHover && "group", className)}
      {...props}
    >
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={
          {
            "--marquee-duration": `${duration}s`,
            "--marquee-repeat": repeat,
            "--marquee-gap": gap,
          } as React.CSSProperties
        }
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 items-stretch"
              style={{ marginRight: i < repeat - 1 ? gap : undefined }}
            >
              {children}
            </div>
          ))}
      </div>
    </div>
  );
}

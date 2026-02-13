import React from "react"

import { cn } from "@/lib/utils"

interface PulsatingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string
  duration?: string
}

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  PulsatingButtonProps
>(
  (
    {
      className,
      children,
      pulseColor = "#808080",
      duration = "1.5s",
      ...props
    },
    ref
  ) => {
return (
  <button
    ref={ref}
    className={cn(
      "relative flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-center",
      "overflow-visible", // KLUCZOWE: pozwala pulsowi wyjść poza przycisk
      className
    )}
    style={
      {
        "--pulse-color": pulseColor,
        "--duration": duration,
        position: 'relative',
      } as React.CSSProperties
    }
    {...props}
  >
    {/* Treść przycisku musi mieć wyższy z-index */}
    <div className="relative z-10">{children}</div>

    {/* WARSTWA PULSUJĄCA */}
    <div 
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
    style={{ 
        borderRadius: 'inherit',
        zIndex: 0,
        pointerEvents: 'none',
        animation: `shadow-pulse ${duration} infinite ease-out`,
        boxShadow: `0 0 0 0px ${pulseColor}`
    }} 
    />
  </button>
)
  }
)

PulsatingButton.displayName = "PulsatingButton"

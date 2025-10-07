"use client"

import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimateOnScrollProps {
  children: React.ReactNode
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale"
  delay?: number
  className?: string
}

export function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useScrollAnimation(ref)

  const animations = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-in": "opacity-0",
    "slide-left": "translate-x-8 opacity-0",
    "slide-right": "-translate-x-8 opacity-0",
    "scale": "scale-95 opacity-0",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        !isVisible && animations[animation],
        isVisible && "translate-y-0 translate-x-0 opacity-100 scale-100",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

import * as React from "react"
import { cn } from "@/lib/utils"

export interface PixelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = "outline", size = "md", children, ...props }, ref) => {
    const baseStyles = "pixel-button inline-flex items-center justify-center whitespace-nowrap"
    
    const variantStyles = {
      primary: "pixel-button-primary",
      secondary: "pixel-button-secondary",
      outline: "bg-transparent text-primary border-primary hover:bg-primary/10",
      ghost: "bg-transparent text-primary border-0 shadow-none hover:bg-primary/10",
    }
    
    const sizeStyles = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    }

    return (
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
PixelButton.displayName = "PixelButton"

export { PixelButton }

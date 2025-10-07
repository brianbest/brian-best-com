import * as React from "react"
import { cn } from "@/lib/utils"

export interface PixelBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error"
}

const PixelBadge = React.forwardRef<HTMLSpanElement, PixelBadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variantStyles = {
      default: "border-accent text-accent",
      primary: "border-primary text-primary",
      secondary: "border-secondary text-secondary",
      success: "border-pixel-success text-pixel-success",
      warning: "border-pixel-warning text-pixel-warning",
      error: "border-pixel-error text-pixel-error",
    }

    return (
      <span
        ref={ref}
        className={cn(
          "pixel-badge",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
PixelBadge.displayName = "PixelBadge"

export { PixelBadge }

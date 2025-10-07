import * as React from "react"
import { cn } from "@/lib/utils"

export interface PixelContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
}

const PixelContainer = React.forwardRef<HTMLDivElement, PixelContainerProps>(
  ({ className, maxWidth = "xl", children, ...props }, ref) => {
    const maxWidthStyles = {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          maxWidthStyles[maxWidth],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
PixelContainer.displayName = "PixelContainer"

export { PixelContainer }

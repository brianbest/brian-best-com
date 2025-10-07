import * as React from "react"
import { cn } from "@/lib/utils"

export interface PixelSectionProps extends React.HTMLAttributes<HTMLElement> {
  bordered?: boolean
  containerized?: boolean
}

const PixelSection = React.forwardRef<HTMLElement, PixelSectionProps>(
  ({ className, bordered = false, containerized = true, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-12 md:py-16 lg:py-20",
          bordered && "border-t-3 border-primary",
          className
        )}
        {...props}
      >
        {containerized ? (
          <div className="container mx-auto px-4">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    )
  }
)
PixelSection.displayName = "PixelSection"

export { PixelSection }

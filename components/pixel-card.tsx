import * as React from "react"
import { cn } from "@/lib/utils"

export interface PixelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
}

const PixelCard = React.forwardRef<HTMLDivElement, PixelCardProps>(
  ({ className, hoverable = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "pixel-card",
          !hoverable && "hover:transform-none hover:shadow-pixel-lg",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
PixelCard.displayName = "PixelCard"

const PixelCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 mb-4", className)}
    {...props}
  />
))
PixelCardHeader.displayName = "PixelCardHeader"

const PixelCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-pixel text-xl text-primary leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </h3>
))
PixelCardTitle.displayName = "PixelCardTitle"

const PixelCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
PixelCardDescription.displayName = "PixelCardDescription"

const PixelCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
PixelCardContent.displayName = "PixelCardContent"

const PixelCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center mt-4 pt-4 border-t border-border", className)}
    {...props}
  />
))
PixelCardFooter.displayName = "PixelCardFooter"

export {
  PixelCard,
  PixelCardHeader,
  PixelCardFooter,
  PixelCardTitle,
  PixelCardDescription,
  PixelCardContent,
}

import * as React from "react"
import { cn } from "@/lib/utils"

export interface PixelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PixelInput = React.forwardRef<HTMLInputElement, PixelInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "pixel-input w-full",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
PixelInput.displayName = "PixelInput"

export interface PixelTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const PixelTextarea = React.forwardRef<HTMLTextAreaElement, PixelTextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "pixel-input w-full min-h-[120px] resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
PixelTextarea.displayName = "PixelTextarea"

export interface PixelLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const PixelLabel = React.forwardRef<HTMLLabelElement, PixelLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "font-pixel text-sm text-foreground mb-2 block",
          className
        )}
        {...props}
      />
    )
  }
)
PixelLabel.displayName = "PixelLabel"

export { PixelInput, PixelTextarea, PixelLabel }

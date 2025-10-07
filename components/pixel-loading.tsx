import { cn } from "@/lib/utils"

interface PixelLoadingProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function PixelLoading({ size = "md", className }: PixelLoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <div className="absolute inset-0 border-3 border-primary border-t-transparent animate-spin"></div>
        <div className="absolute inset-1 border-2 border-secondary border-t-transparent animate-spin animation-delay-150"></div>
      </div>
    </div>
  )
}

export function PixelLoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <PixelLoading size="lg" className="mb-4" />
        <p className="font-pixel text-sm text-primary">Loading...</p>
      </div>
    </div>
  )
}

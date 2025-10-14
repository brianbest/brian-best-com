import Image from "next/image"
import Link from "next/link"
import { PixelButton } from "@/components/pixel-button"

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Pixel Grid Background Pattern */}
      <div className="absolute inset-0 opacity-30 pattern-pixel-grid" aria-hidden="true"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-pixel-fade-in">
            <h1 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-primary mb-4 leading-tight">
              Brian Best
            </h1>
            <p className="text-lg md:text-xl text-foreground mb-3 font-mono">
              Senior Software Developer
            </p>
            <p className="text-sm md:text-base text-secondary mb-6 font-mono">
              @ Axonify
            </p>
            <p className="text-muted-foreground text-base mb-8 max-w-md">
              Building AI-driven systems that transform customer care. Turning LLM research into production features that make support faster, smarter, and infinitely scalable.
            </p>
            <div className="flex flex-wrap gap-4">
              <PixelButton
                asChild
                variant="primary"
              >
                <Link href="/projects">View Projects</Link>
              </PixelButton>
              <PixelButton
                asChild
                variant="outline"
              >
                <Link href="/about">About Me</Link>
              </PixelButton>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 border-3 border-primary shadow-pixel-lg overflow-hidden animate-pixel-float">
              <Image
                src="/brian.jpeg"
                alt="Brian Best"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
              {/* Pixel corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary"></div>
              <div className="absolute top-0 right-0 w-4 h-4 bg-secondary"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-accent"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-persona-black py-16 md:py-24">
      {/* Mask SVG Background Pattern */}
      <div className="absolute inset-0 opacity-5 pattern-mask" aria-hidden="true"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-bungee text-4xl md:text-5xl lg:text-6xl text-persona-red mb-4">Brian Best</h1>
            <p className="text-xl md:text-2xl text-persona-white mb-6">Senior Software Developer @ Axonify</p>
            <p className="text-persona-grey text-lg mb-8 max-w-md">
              Crafting elegant solutions to complex problems with React, Next.js, and TypeScript.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-persona-red hover:bg-persona-maroon text-persona-black font-bungee shadow-thief"
              >
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-persona-red text-persona-red hover:bg-persona-red/10 font-bungee"
              >
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-persona-white transform rotate-3 shadow-thief overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Brian Best"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

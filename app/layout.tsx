import type React from "react"
import type { Metadata } from "next"
import { Inter, Bungee, Pixelify_Sans, JetBrains_Mono, Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Layout from "@/components/layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
  display: "swap",
})

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans-modern",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Brian Best | Senior Software Developer",
  description:
    "Senior Software Developer at Axonify building AI-driven systems and LLM-powered solutions. Specializing in enterprise software, system architecture, and applied AI for customer care.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bungee.variable} ${pixelifySans.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} ${dmSans.variable} font-sans-modern bg-background text-foreground min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}

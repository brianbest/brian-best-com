import type React from "react"
import type { Metadata } from "next"
import { Bungee, JetBrains_Mono, Newsreader } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Layout from "@/components/layout"
import { Analytics } from "@vercel/analytics/next"

// Geist Sans from the geist npm package — exposes CSS var "--font-geist-sans"
// Tailwind fontFamily.sans references that same var.

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Brian Best | Senior Software Developer",
  description: "Personal website and blog of Brian Best, Senior Software Developer",
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
        className={`${GeistSans.variable} ${jetbrainsMono.variable} ${newsreader.variable} ${bungee.variable} bg-term-bg text-term-fg font-sans min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Layout>{children}</Layout>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter, Bungee } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Brian Best | Senior Software Developer",
  description: "Personal website and blog of Brian Best, Senior Software Developer at Axonify",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bungee.variable} font-sans bg-persona-black text-persona-white min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}

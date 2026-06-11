import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import Layout from "@/components/layout"
import { Analytics } from "@vercel/analytics/next"

// Geist Sans from the geist npm package — exposes CSS var "--font-geist-sans"
// Tailwind fontFamily.sans references that same var.

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://brianbest.com"),
  title: {
    default: "Brian Best | Principal Software Developer",
    template: "%s | Brian Best",
  },
  description:
    "Personal website and blog of Brian Best — Principal Software Developer building agentic AI, MCP integrations, and production LLM systems.",
  openGraph: {
    type: "website",
    siteName: "Brian Best",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${jetbrainsMono.variable} bg-term-bg text-term-fg font-sans min-h-screen`}
      >
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  )
}

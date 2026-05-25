import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        persona: {
          red: "#cc2c34",
          maroon: "#922526",
          black: "#000000",
          white: "#ffffff",
          grey: "#d9d0d1",
        },
        term: {
          DEFAULT: "#0f0d0c",
          bg:        "#0f0d0c",
          "bg-2":    "#161311",
          "bg-3":    "#1c1916",
          "bg-4":    "#23201c",
          fg:        "#ece6dd",
          "fg-soft": "#b8b0a6",
          "fg-muted":"#7a7166",
          rule:      "#2a2622",
          "rule-soft":"#211e1a",
          accent:    "#ef4444",
          "accent-soft":"rgba(239,68,68,0.14)",
          "accent-deep":"#b91c1c",
          green:     "#7dd3a8",
          yellow:    "#e6c98a",
          blue:      "#8ab4e6",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        bungee: ["var(--font-bungee)"],
      },
      skew: {
        "3": "3deg",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
}

export default config

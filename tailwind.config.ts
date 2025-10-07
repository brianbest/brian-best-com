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
        pixel: {
          cyan: "#00F0FF",
          pink: "#FF006E",
          amber: "#FFBE0B",
          navy: "#0D1B2A",
          slate: "#1B263B",
          "dark-slate": "#0A1628",
          white: "#E0E1DD",
          gray: "#8D99AE",
          muted: "#6C7A89",
          success: "#06FFA5",
          warning: "#FFBE0B",
          error: "#FF006E",
          info: "#00F0FF",
          "light-bg": "#F8F9FA",
          "light-surface": "#FFFFFF",
          "light-text": "#212529",
        },
        persona: {
          red: "#cc2c34",
          maroon: "#922526",
          black: "#000000",
          white: "#ffffff",
          grey: "#d9d0d1",
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
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        pixel: ["var(--font-pixel)"],
        bungee: ["var(--font-bungee)"],
        mono: ["var(--font-mono)"],
      },
      skew: {
        "3": "3deg",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
          },
        },
      },
      animation: {
        'pixel-fade-in': 'pixelFadeIn 0.5s ease-out',
        'glitch': 'glitch 0.5s ease-in-out',
        'pixel-float': 'pixelFloat 3s ease-in-out infinite',
        'blink': 'blink 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
}

export default config

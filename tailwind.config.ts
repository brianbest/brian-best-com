import type { Config } from "tailwindcss"
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
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
  plugins: [require("@tailwindcss/typography")],
}

export default config

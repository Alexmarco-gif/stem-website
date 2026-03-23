import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: "#4D7CFF",
        "primary-dark": "#3563EB",
        background: "#F0F2F8",
        ink: "#0A0B14",
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8D5A0",
          dark: "#A07830",
        },
        teal: {
          DEFAULT: "#00D4AA",
          light: "#80FFDD",
          dark: "#008F72",
        },
        surface: {
          dark: "#05081A",
          mid: "#0B0F26",
          card: "#12172E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-ring": "pulse-ring 3s ease-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "draw-line": "draw-line 1.5s ease-out forwards",
        "progress-fill": "progress-fill 4s linear infinite",
        "blob-drift": "blob-drift 20s ease-in-out infinite",
        "blob-drift-rev": "blob-drift 25s ease-in-out infinite reverse",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "border-glow": "border-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "draw-line": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "progress-fill": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "blob-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 30px) scale(0.95)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.55" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "border-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(77,124,255,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(77,124,255,0.6), 0 0 80px rgba(0,212,170,0.2)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

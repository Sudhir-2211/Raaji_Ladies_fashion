import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: "#8B2346",
          dark: "#6B1A34",
          light: "#A43257",
        },
        rose: {
          DEFAULT: "#8C4A59",
          light: "#B87B8A",
          soft: "#E8D5D8",
        },
        green: {
          DEFAULT: "#255344",
          dark: "#1A3D32",
        },
        cream: {
          DEFAULT: "#FFF8F3",
          light: "#FFFFFF",
          dark: "#F8EFE7",
        },
        blush: {
          DEFAULT: "#FFF0F3",
          dark: "#FCE4E8",
        },
        charcoal: {
          DEFAULT: "#2B2527",
          light: "#4A4345",
          muted: "#756B6E",
        },
        gold: {
          DEFAULT: "#C5A059",
          light: "#E5D0A1",
          dark: "#A37F38",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      boxShadow: {
        atelier: "0 4px 20px -2px rgba(43, 37, 39, 0.06)",
        "atelier-hover": "0 12px 28px -4px rgba(139, 35, 70, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

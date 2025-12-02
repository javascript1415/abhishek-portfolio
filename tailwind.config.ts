import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a",
          light: "#1e293b",
          dark: "#020617",
        },
        accent: {
          gold: "#f59e0b",
          purple: "#8b5cf6",
          blue: "#3b82f6",
        },
      },
    },
  },
  plugins: [],
};

export default config;

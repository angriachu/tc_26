import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        night: "#080D1A",
        surface: "#0B1020",
        brand: "#2563EB",
        cyan: "#22D3EE",
        violet: "#6366F1",
      },
      fontFamily: { sans: ["Manrope", "sans-serif"] },
      boxShadow: { glow: "0 0 60px rgba(37,99,235,.22)" },
    },
  },
  plugins: [],
} satisfies Config;

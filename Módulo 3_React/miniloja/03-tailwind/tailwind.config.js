/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // usaremos class no <html> via useTheme
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // ≥481, ≥769, ≥1025
        "sm481": "481px",
        "md769": "769px",
        "lg1025": "1025px",
      },
      borderRadius: { "card": "12px" },
      boxShadow: {
        card: "0 4px 16px rgba(2,6,23,0.08)",
        cardDark: "0 6px 20px rgba(0,0,0,0.45)",
      },
      transitionTimingFunction: { smooth: "ease" },
      transitionDuration: { 180: "180ms" },
    },
  },
  plugins: [],
};


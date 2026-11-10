/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        spider: {
          dark: "#07070a",
          darker: "#050507",
          card: "rgba(9, 8, 10, 0.88)",
          cardHover: "rgba(16, 14, 18, 0.95)",
          red: "#a31515",
          crimson: "#d81e2f",
          neon: "#ff1238",
          glow: "rgba(255, 18, 56, 0.35)",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(255, 70, 90, 0.45)",
        },
      },
      fontFamily: {
        sans: ["General Sans", "Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
        heading: ["General Sans", "Geist", "sans-serif"],
      },
      keyframes: {
        "orb-a": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(40px, 30px) scale(1.08)" },
        },
        "orb-c": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-35px, -25px) scale(1.06)" },
        },
      },
      animation: {
        "orb-a": "orb-a 14s ease-in-out infinite alternate",
        "orb-c": "orb-c 16s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

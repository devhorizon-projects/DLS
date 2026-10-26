/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111315",
        surface: "#24272B",
        "surface-dark": "#16191D",
        "silver-primary": "#E8EAED",
        "silver-secondary": "#C0C5CC",
        "text-muted": "#8E95A0",
        "text-light": "#D4D8DE",
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        "metallic-sm": "0 2px 8px -2px rgba(232, 234, 237, 0.12)",
        "metallic-md": "0 4px 20px -4px rgba(232, 234, 237, 0.2)",
        "metallic-lg": "0 10px 30px -6px rgba(232, 234, 237, 0.3)",
        "surface-card": "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        Bebas: ["Bebas Neue", "sans-serif"],
      },
      boxShadow: {
        boxMain: `box-shadow: 1px 12px 14px -3px rgba(0,0,0,0.52);`,
      },
      colors: {
        "primary-100": "#BFDBFE",
        "primary-300": "#60A5FA",
        "primary-500": "#2563EB",
        "primary-700": "#312E81",
        "dark-1": "#0F172A",
        "gray-300": "#3B4251",
        "gray-500": "#758297",
        "light-1": "#E2E8F0",
      },
    },

    plugins: [],
  },
};

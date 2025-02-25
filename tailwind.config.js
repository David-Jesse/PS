/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-50": "#222C57",
        "light-blue": "#92CDD3",
        "blue-100": "#1b5AA5",
        "sky-blue": "#F3F7FA",
        "light-skyblue":"#C3E1E9",
        "deep-blue": "#20294F",
        "gray-color": "#AEAEAE",
        "deep-purple": "#071A3E",
        "dark-blue": "#0C5CA3",
        "arrow-blue": "#175Aa5",
        "button-color": "#141939",
        "grayish": "#f6f6f6",
        "blue-block": "#1a5aa5",
        "lighter-blue": "#D7EDF2",
        "shaded-blue": "#e5f3f6",
      }, 
      boxShadow: {
        'custom': '0px 8px 40px 0px rgba(92, 0, 17, 0.1)',
        fontFamily: {avenirnextltpro: "Avenir Next LT Pro"},
      },
      screens: {
        'sm': '360px',
      }
    },
  },
  plugins: [],
}


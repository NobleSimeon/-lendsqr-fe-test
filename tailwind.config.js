/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkerBlue: "hsla(220, 58%, 31%, 1)",
        lightBlue: "hsla(224, 20%, 41%, 1)",
        lightGreen: "hsla(180, 60%, 51%, 1)",
        pending: "hsla(46, 100%, 46%, 1)",
        blacklisted: "hsla(345, 97%, 45%, 1)",
        active: "hsla(137, 60%, 51%, 1)",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

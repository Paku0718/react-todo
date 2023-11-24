/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primaryBg-dark": "#070b1b",
        pColor: "#1d243c",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          100: "#fefaf1",
        },
        coral: {
          500: "#ff7f50",
          600: "#ff6a39",
          700: "#e65c2d",
        },
      },
    },
  },
  plugins: [],
};

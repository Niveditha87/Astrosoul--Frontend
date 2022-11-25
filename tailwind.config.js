/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

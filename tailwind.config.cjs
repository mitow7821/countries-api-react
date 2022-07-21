/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darker: "hsl(200, 15%, 8%)",
        dark: "hsl(207, 26%, 17%)",
        primary: "hsl(209, 23%, 22%)",
        gray: "hsl(0, 0%, 52%)",
        light: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matcha: {
          50:  "#f2f7ee",
          100: "#e0edda",
          200: "#c2dbb6",
          300: "#9dc489",
          400: "#76ab5d",
          500: "#558f3d",
          600: "#3e7030",
          700: "#325827",
          800: "#294621",
          900: "#223b1c",
        },
        cream: {
          50:  "#fffdf5",
          100: "#fff9e6",
          200: "#fef0c0",
          300: "#fde68a",
          400: "#fcd34d",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

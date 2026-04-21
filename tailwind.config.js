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
          50:  '#F2F5EF',
          100: '#DEE8D8',
          200: '#BDD4B2',
          300: '#94B884',
          400: '#6A9C5A',
          500: '#4E7D3E',
          600: '#3C6130',
          700: '#2A4721',
          800: '#1C3318',
          900: '#112010',
          950: '#0A1509',
        },
        cream: {
          50:  '#FAFAF7',
          100: '#F4F0E8',
          200: '#E8E1D4',
          300: '#D8CFC0',
          400: '#C4B8A4',
        },
        stone: {
          50:  '#FAFAF8',
          100: '#F3F0EB',
          200: '#E5E0D8',
        },
        gold: {
          100: '#F5EDD8',
          300: '#DEC48A',
          400: '#C9A96E',
          500: '#B8955A',
          600: '#9C7A44',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#1A3C5E',
        'navy-dark': '#0D1F30',
        'navy-light': '#2A5480',
        gold: '#C9A84C',
        'gold-light': '#E2C47A',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
};

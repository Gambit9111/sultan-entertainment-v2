/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-light': '#EFEEE0',
        'my-dark': '#1D2123',
        'my-yellow-secondary': '#FACD66',
        'my-blue-primary': '#307DB8',
        'my-dark-alt': '#1A1E1F',
        'my-light-alt': '#A4C7C6',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
}
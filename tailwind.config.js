/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cr-black': '#1e1e27',
        'cr-white': '#fffffe',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      minHeight: {
        'cr-92': '92vh'
      },
    },
  },
  plugins: [],
};

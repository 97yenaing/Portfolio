/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07130f',
        mint: '#9de7c7',
        lime: '#d5f86b',
        paper: '#f5f7f2',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      boxShadow: { glow: '0 20px 80px rgba(85, 219, 161, .16)' },
    },
  },
  plugins: [],
}

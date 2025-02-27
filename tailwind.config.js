/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF3A3A', // Red color from the logo
        secondary: '#FFFFFF', // White
        dark: '#0A0A0A', // Almost black
        'dark-gray': '#1A1A1A', // Dark gray for sections
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        script: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0b1f3a',
        'navy-light': '#13315c',
        accent: '#c9a24b',
        bg: '#f4f6f9',
      },
    },
  },
  plugins: [],
};

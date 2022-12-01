/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          accent: '#63A4FF',
          main: '#1976D2',
          dark: '#004BA0',
        },
        secondary: {
          accent: '#FFD95A',
          main: '#F9A825',
          dark: '#C17900',
        },
      },
      fontFamily: {
        body: 'quicksand',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};

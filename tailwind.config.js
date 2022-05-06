const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        form: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          accent: '#63A4FF',
          main: '#1976D2',
          dark: '#004BA0',
        },
        secondary: {
          accent: '#FFD95A',
          main: '#F9A825',
          dark: 'C17900',
          'gray-almost-black': '#282828',
        },
        success: {
          main: '#57EE78',
          hover: '#1CB63E',
        },
      },
    },
  },
  plugins: [],
};

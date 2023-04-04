/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
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
        body: 'Open Sans',
        logo: 'Rajdhani',
      },
      transitionProperty: {
        width: 'width',
      },
      borderRadius: {
        quarter: '150px',
      },
      backgroundImage: {
        header: "url('/header_background.svg')",
        'login-left-side': "url('/login_left_side_bg.svg')",
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0%' },
          '90%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        cover: {
          '0%': { 'background-color': 'black' },
          '90%': { 'background-color': 'black' },
          '100%': { 'background-color': 'transparent' },
        },
      },

      animation: {
        'fade-in': 'fadein 8s linear',
        cover: 'cover 8s linear',
      },
    },
  },
  plugins: [],
};

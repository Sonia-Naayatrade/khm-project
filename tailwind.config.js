/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'khfm-primary': '#ED193F'
      },
      width: {
        '306': '306px',
      },
      height: {
        '2': '2px',
      },
    },
  },
  variants: {},
  plugins: [],
};

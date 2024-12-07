
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
      animation: {
        fadeInUp: "fadeInUp 1s ease-out forwards",
        bounceIn: "bounceIn 1s ease-out forwards",
        rotate: "rotate 1s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "60%": { transform: "scale(1.05)", opacity: 1 },
          "100%": { transform: "scale(1)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};

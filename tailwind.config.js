/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#481878",
        secondary:"",
        success:"",
        info:"",
        warning:"",
        danger:"",
        light:"",
        dark:"",
      },
      screens:{
        sm:"576px",
        md:"768px",
        lg:"992px",
        xl:"1200px",
      }
    },
  },
  plugins: [],
}
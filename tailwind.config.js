/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
    extend: {
      colors:{
        pink: "#F4A88E",
        gray:"#E4E4E4"
    
      },
      fontSize: {
        sm: '22px',
        md: '28px',
        lg: '50px',
        xl: '62px',
      }
    },
  },
  plugins: [],
}
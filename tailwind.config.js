/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#09090B",
        secondary: "#FE6D3E",
        text: "#FAFAFA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      }
    },
  },
  
}


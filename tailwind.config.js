/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        petroleum: "#004E7C",
        coral: "#F86C6B"
      },
      borderRadius: {
        "2xl": "1rem"
      },
      boxShadow: {
        'soft': '0 6px 20px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

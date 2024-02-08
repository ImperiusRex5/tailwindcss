/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./sourceP/*.html"],
  theme: {
    extend: {
      fontFamily:{
        lora: "'Lora', serif",
      },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


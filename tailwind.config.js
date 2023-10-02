/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        'darkText': '#767D88', 
        'primary-color':'white', 
      },
      borderColor:{
        'primaryBorder':'#767D88',
      },
      fill:{
        'primaryBg':'#767D88',
      },
      
    },
  },
  plugins: [],
}

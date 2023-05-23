/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      colors: {
        customBlue: '#35C3F0',
      },

      backgroundImage: {
        'graduation': "url('../public/Graduation-rafiki.png')",
        'scientist': "url('../public/Medical research-rafiki.png')",
        'creative': "url('../public/Creative team-rafiki.png')",
        'morty': "url('../public/morty.png')",
        'gradblue': "url('../public/gradblue.jpg')",
        'cis': "url('../public/computer&infoscience.jpg')",



      }
    },
  },
  plugins: [],
}

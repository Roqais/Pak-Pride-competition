/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'p1Main': "url('../assets/punjab/p1Main.jpg')",
        'pMain': "url('../assets/punjab/pMain.jpg')",
        'p2Main': "url('../assets/punjab/p2Main.jpg')",
      },
    },
  },
  plugins: [],
}
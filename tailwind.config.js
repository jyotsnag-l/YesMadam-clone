/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPink: "#ec4899",
        brandBlue: "#3b82f6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // ✅ Added Inter as the default sans font
      },
    },
  },
  plugins: [],
}

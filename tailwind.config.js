/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "rotate-border": "spin 2s linear infinite",
      },
      colors:{
        background: "#EDE8F5",
        lightpurple: "#ADBBDA",
        greypurple:"#8697C4",
        lightblue:"#7091E6",
        blue:"#3D52A0",
        darkpurple:"#050A44"
      },
    },
  },
  plugins: [],
}


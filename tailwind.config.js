/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F1EDE4",
        cream: "#FAF7F1",
        ink: "#0E0E0C",
        muted: "#7A7972",
        copper: "#D44A11",
        green: "#1F6E3A",
        amber: "#F2B544",
        red: "#B12A2A",
      },
    },
  },
  plugins: [],
};

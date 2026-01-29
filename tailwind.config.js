export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c9a962",
        dark: "#0a0a0a",
        surface: "#1a1a1a"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Karla", "sans-serif"]
      }
    }
  },
  plugins: []
};

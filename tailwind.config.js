module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nova: "'Bona Nova', serif",
        sans: "'Source Sans Pro', sans-serif",
      },
    },
    minHeight: {
      50: "50vh",
      86: "86vh",
      full: "100%",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

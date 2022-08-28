const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      sans: ["Inconsolata", "monospace"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },

  plugins: [],
};

module.exports = config;

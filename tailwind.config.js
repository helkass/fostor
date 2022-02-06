module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBEFD9",
        second: "#876445",
        thrid: "#FBE1B5",
        card: "#FBE5C1",
        footer: "#56402C",
        font: "#362222",
      },
      backgroundImage: {
        laura: "url('../public/images/laura.svg')",
      },
      boxShadow: {
        "3xl": "0px 6px 10px rgba(135, 100, 69, 1)",
      },
    },
  },
  plugins: [],
};

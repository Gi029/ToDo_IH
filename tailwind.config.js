const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      digitalLavander: "#ad96dc",
      astroDust: "#a54f51",
      galacticCobalt: "#024683",
      red: colors.red,
      blue: colors.blue,
      white: colors.white,
    },
    extend: {},
  },
  fontFamily: {
    sans: ['"Noto Sans"'],
  },
};

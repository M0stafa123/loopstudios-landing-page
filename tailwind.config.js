/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        introMobile: 'url("../public/images/mobile/image-hero.jpg")',
        earthMobile: 'url("../public/images/mobile/image-deep-earth.jpg")',
        arcadeMobile: 'url("../public/images/mobile/image-night-arcade.jpg")',
        soccerMobile: 'url("../public/images/mobile/image-soccer-team.jpg")',
        gridMobile: 'url("../public/images/mobile/image-grid.jpg")',
        aboveMobile: 'url("../public/images/mobile/image-from-above.jpg")',
        pocketMobile: 'url("../public/images/mobile/image-pocket-borealis.jpg")',
        curiosityMobile: 'url("../public/images/mobile/image-curiosity.jpg")',
        fisheyeMobile: 'url("../public/images/mobile/image-fisheye.jpg")',
        introDesktop: 'url("../public/images/desktop/image-hero.jpg")',
        earthDesktop: 'url("../public/images/desktop/image-deep-earth.jpg")',
        arcadeDesktop: 'url("../public/images/desktop/image-night-arcade.jpg")',
        soccerDesktop: 'url("../public/images/desktop/image-soccer-team.jpg")',
        gridDesktop: 'url("../public/images/desktop/image-grid.jpg")',
        aboveDesktop: 'url("../public/images/desktop/image-from-above.jpg")',
        pocketMDesktop: 'url("../public/images/desktop/image-pocket-borealis.jpg")',
        curiosityDesktop: 'url("../public/images/desktop/image-curiosity.jpg")',
        fisheyeDesktop: 'url("../public/images/desktop/image-fisheye.jpg")',
        linear: "linear-gradient(to right, #000000bf, transparent)",
        linearDesktop: "linear-gradient(to top,#000000bf, transparent)",
      },
      colors: {
        VeryDarkGray: "hsl(0, 0%, 41%)",
        DarkGray: "hsl(0, 0%, 55%)",
      },
      fontSize: {
        DesignFont: "15px",
      },
      fontFamily: {
        Alata: "'Alata', sans-serif",
        JosefinSans: "'Josefin Sans', sans-serif",
      },
    },
  },
  plugins: [],
};

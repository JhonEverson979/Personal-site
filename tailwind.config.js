/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": 'url("/images/bgPick/background2.jpg")',
      },
      keyframes: {
        moveDown: {
          "0%": { transform: "translateY(-600px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        fadeAway: {
          "0%": { opacity: 1 },
          "75%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        moveUp: {
          "0%": { transform: "translateY(300px)", opacity: 0 },
          "50%": { transform: "translateY(300px)", opacity: 0 },
          "83%": { transform: "translateY(0px)", opacity: 1 },
          "84%": { transform: "translateY(-5px)" },
        },
        lloop: {
          "0%, 10%": {
            backgroundPosition: "-1000px",
          },
          "10%": {
            backgroundPosition: "top left",
          },
          "98%": {
            backgroundPosition: "top right",
          },
          "100%": {
            backgroundPosition: "1200px",
          },
        },

        // @keyframes animate {
        //   0%, 10%{
        //     background-position: -1000px;
        //   }
        //   10%{
        //     background-position: top left;
        //   }
        //   98% {
        //     background-position: top right;
        //   }

        //   100%{
        //     background-position: 1200px;
        //   }
        // }
      },
      animation: {
        moveDown: "moveDown 1.2s ease",
        fadeAway: "fadeAway 2.2s ease-out",
        moveUp: "moveUp 1.5s linear",
        lloop: "lloop 4s infinite",
      },
      backgroundSize: {
        150: "150px",
      },
    },
  },
  plugins: [],
};

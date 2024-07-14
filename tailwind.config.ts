import type { Config } from "tailwindcss";

const color = "#F07B01";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxs: ["11px", "16px"],
      xs: ["12px", "18px"],
      sm: ["13px", "20px"],
      para: ["14px", "22px"],
      base: ["16px", "24px"],
      md: ["17px", "26px"],
      lg: ["18px", "28px"],
      xl: [
        "22px",
        {
          lineHeight: "32px",
          letterSpacing: "-0.01em",
        },
      ],
      "2xl": [
        "26px",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
    },
    screens: {
      sm: "639px",
      md: "767px",
      lg: "989px",
      xl: "1199px",
      "2xl": "1200px",
    },
    extend: {
      colors: {
        primary: color,
        test: "#FFAF45",
        secondary: "#FED7AA",
        // 'blue':'#000099',
        lightgray: "#F7F7F8",
        limeyellow: "#FDBF50",
        navyblack: "#2A2C41",
        navyblacklite: "#ceced6",
        graytext: "#212221",
      },
      // gradientColorStops: theme => ({
      //   'cyan-blue-gradient': {
      //     'from': theme('colors.cyan.500'),
      //     'to': theme('colors.blue.500'),
      //   },
      // }),
    },
  },
  plugins: [],
};
export default config;

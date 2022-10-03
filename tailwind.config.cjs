/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#626b76",
          100: "#58616c",
          200: "#4e5762",
          300: "#444d58",
          400: "#3a434e",
          500: "#303944",
          600: "#262f3a",
          700: "#1c2530",
          800: "#121b26",
          900: "#08111c",
        },
        primary: {
          50: "#32a8ff",
          100: "#289eff",
          200: "#1e94ff",
          300: "#148aff",
          400: "#0a80ff",
          500: "#0076fe",
          600: "#006cf4",
          700: "#0062ea",
          800: "#0058e0",
          900: "#004ed6",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};

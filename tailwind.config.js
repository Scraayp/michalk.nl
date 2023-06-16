/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#1F2029",
        lightbg: "#fff",
        primary: "#31C1FF",
      },
      width: {
        head: "76%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "media",
};

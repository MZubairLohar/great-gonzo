/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom : ["Kermit","sans-serif"],
        custom2 : ["KH"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero': "url('./images/background.png')",
        'logo': "url('./images/background.png')",
        'logo': "url('./images/ether.png')",
        'logo': "url('./images/Xlogo.png')",
        'gToken': "url('./images/gonzoToken.png')",
      }
    },
  },
  plugins: [],
};

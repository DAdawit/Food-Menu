/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E3C48E",
        secondary: "#fff",
        bgPrimary: "#0F0C0C",
        bgSecondary: "#212021",
      },
    },
  },
  plugins: [],
};

/** @type { import('tailwindcss').Config } */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "1-2": "1fr 2fr",
        "auto-1fr": "auto 1fr",
      },
    },
  },
  plugins: [],
};

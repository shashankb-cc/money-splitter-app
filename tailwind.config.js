/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ['"Space Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};

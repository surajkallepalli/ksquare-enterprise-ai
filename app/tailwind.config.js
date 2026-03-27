/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Outfit'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        "ks-blue": "#3B82F6",
        "ks-indigo": "#6366F1",
        "ks-neutral-dark": "#111827",
        "ks-neutral-light": "#F3F4F6",
      },
      keyframes: {
        "slow-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "slow-rotate-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "slow-rotate": "slow-rotate 60s linear infinite",
        "slow-rotate-reverse": "slow-rotate-reverse 60s linear infinite",
      },
    },
  },
  plugins: [],
};
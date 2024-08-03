/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-background": "#000000",
        "overlay-background": "#121212",
        "base-border": "#1f1f1f",
        "highlight-border": "#39ff14",
        "action-button": "#ff5722",
        "base-text": "#e0e0e0",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        focus: 'var(--focus)',
        'primary-50': 'var(--primary-50)',
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-700': 'var(--primary-700)',
        'primary-800': 'var(--primary-800)',
        'primary-900': 'var(--primary-900)',
        'primary-DEFAULT': 'var(--primary-DEFAULT)',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {   //the color values must be the same of the ./scr/app/styles/variables.scss
      "modern": {
        extend: "ligth",
        colors: {
          background: "#ffffff",
          foreground: "#000000",
          focus: "#1031db",
          primary: {
            50: "#eaf5ff",
            100: "#d8ecff",
            200: "#b9dbff",
            300: "#90c0ff",
            400: "#6499ff",
            500: "#4072ff",
            600: "#1f47ff",
            700: "#1031db",
            800: "#1433bf",
            900: "#1a3395",
            DEFAULT: "#1031db"
          },
        }
      }
    }
  })],
}


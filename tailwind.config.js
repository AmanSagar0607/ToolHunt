// import daisyui from "daisyui";

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#264653',
//         secondary: '#2a9d8f',
//         button: '#d1495b',
//         'secondary-button': '#f9c74f',
//         alert: '#e76f51',
//         warning: '#e9c46a',
//       },
//     },
//   },
//   plugins: [daisyui],
//   daisyui: {
//     themes: ["light", "dark", "synthwave"], // Include the themes you want to use
//   },
// };

/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
       handjet: ['Handjet', 'sans-serif'],
      },
      colors: {
        primary: '#264653',
        secondary: '#2a9d8f',
        button: '#d1495b',
        'secondary-button': '#f9c74f',
        alert: '#e76f51',
        warning: '#e9c46a',
        // Add any additional colors you need for dark mode
        'dark-primary': '#1d3557',
        'dark-secondary': '#2a9d8f',
        'dark-button': '#e63946',
        'dark-secondary-button': '#f1faee',
        'dark-alert': '#f1faee',
        'dark-warning': '#a8dadc',
      },
    },
  },
  plugins: [
    daisyui
  ],
}

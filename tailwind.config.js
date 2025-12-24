/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {

    extend: {

      colors: {

        terracotta: {

          50: '#faf5f3',

          100: '#f5e8e3',

          200: '#ead1c7',

          300: '#d9b3a3',

          400: '#c8957f',

          500: '#b8775c',

          600: '#9b6e5c',

          700: '#7d5a4a',

          800: '#654a3d',

          900: '#523d33',

        },

        cream: {

          50: '#fefdfb',

          100: '#faf8f5',

          200: '#f5f0e6',

          300: '#f0e8d7',

          400: '#e8dcc8',

          500: '#faf0e6',

        },

      },

    },

  },

  plugins: [],

}


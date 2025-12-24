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

          50: '#fdf4f3',

          100: '#fae5e3',

          200: '#f5cbc7',

          300: '#eda8a3',

          400: '#e5857f',

          500: '#d1625c',

          600: '#b94337',

          700: '#9b362d',

          800: '#7d2a23',

          900: '#5f1f19',

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


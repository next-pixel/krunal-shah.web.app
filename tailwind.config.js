/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class', // or media (automatically switch theme based on user preference theme)
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans]
      },
      colors: {
        main: {
          1: colors.zinc[50],
          1.5: colors.zinc[200],
          2: colors.zinc[400],
          3: colors.zinc[700],
          4: colors.zinc[800],
          5: colors.zinc[900]
        },
        primary: {
          0.5: colors.indigo[100],
          1: colors.indigo[300],
          2: colors.indigo[400],
          3: colors.indigo[500],
          4: colors.indigo[600],
          5: colors.indigo[700]
        },
        secondary: {
          1: colors.purple[300],
          2: colors.purple[400],
          3: colors.purple[500]
        }
      },
      animation: {
        marquee: 'marquee 200s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}

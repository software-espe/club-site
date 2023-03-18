/** @type {(tailwindConfig: object) => object} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      base: ['Inter', 'sans-serif']
    },
    extend: {
      fontSize: {
        headline: '96px',
        bigTitle: '64px',
        title: '36px',
        subtitle: '30px',
        body: '20px',
        small: '16px'
      },
      boxShadow: {
        blur: '0 0px 40px 3px #082BAA'
      },
      colors: {
        base: {
          DEFAULT: '#FFFFFF'
        },
        warning:{
          DEFAULT: '#FFC888',
          dark: '#8A4B01'
        },
        gray: {
          DEFAULT: '#202020',
          opaque: '#252525',
          light: '#2E2E2E',
          super: '#585353',
          placeholder: '#434343'
        },
        green: {
          DEFAULT: '#16B166',
          light: '#0FDA78'
        },
        blue: {
          light: '#9FD1FF'
        }
      }
    }
  },
  plugins: []
});

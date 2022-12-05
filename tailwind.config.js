/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        headline: '96px',
        bigTitle: '64px',
        title: '36px',
        body: '20px',
        small: '16px'
      },
      colors: {
        gray: {
          DEFAULT: '#202020',
          opaque: '#252525',
          light: '#2E2E2E',
          super: '#585353'
        },
        green: {
          DEFAULT: '#16B166',
          light: '#0FDA78'
        }
      }
    }
  },
  plugins: []
};

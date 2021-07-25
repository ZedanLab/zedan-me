const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      accent: '#E85D5A',
    },
    fontFamily: {
      merriweather: ['"Merriweather"'],
      ubuntu: ['"Ubuntu"'],
    },
    extend: {
      zIndex: {
        '-10': '-10',
      },
      inset: {
        '-2.7': '-0.7rem',
      },
      content: {
        qoute: `'"'`,
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
      animation: ['hover', 'group-hover', 'responsive', 'motion-safe', 'motion-reduce'],
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

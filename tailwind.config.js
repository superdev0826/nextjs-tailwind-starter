const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  container: {
    padding: {
      sm: '1.5rem',
      lg: '3rem',
      '2xl': 0,
    },
  },
  theme: {
    fontFamily: {
      // FIXME: Add the real project font families, which are imported in the "fonts.css" file,
      // and give them the human-readable names
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      // FIXME: Remove the "mono" font family, if it is not used in the project
      mono: ['', ...defaultTheme.fontFamily.mono],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      // FIXME: Add colors which are used in the project. Make sure that they are prepared
      // in the Figma and followed the naming "primary/secondary/gray-${number}"
      // Example of correctly prepared colors in Figma — https://user-images.githubusercontent.com/20713191/143586876-5e834233-9639-4166-9811-b00e63820d98.png
      black: '#0E0A0F',
      white: '#fff',
      primary: {
        1: '#96F',
        2: '#CB6AFB',
      },
      secondary: {
        1: '',
      },
      gray: {
        98: '#FAF9FA',
        94: '#F0EEF1',
        900: 'rgb(21 20 31)',
      },
    }),
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1472px',
      // => @media (min-width: 1472px) { ... }
    },
    backgroundImage: {
      'input-gradient': 'linear-gradient(90deg, #201726 0%, #251b2a 47.84%, #302336 95%)',
      'placeholder-gradient':
        'linear-gradient(90deg, #EAC8F2 0%, #E6ADEC 32.41%, #D49EE8 71.97%, #CA97E6 100%)',
      'highlight-graident':
        'linear-gradient(133deg, #D383FC 21.78%, #CB6AFB 39.25%, rgba(203, 106, 251, 0.20) 86.85%)',
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};

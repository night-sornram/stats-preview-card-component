import type { Config } from 'tailwindcss'
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
      "custom-purple": {
          "100": "hsl(277, 64%, 61%)",
          "200": "hsl(244, 38%, 16%)",
      },
      "c-white":{
        "100" : "hsla(0, 0%, 100%, 0.6)",
        "200" : "hsla(0, 0%, 100%, 0.75)",
      }
  },
}
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: colors,
    },
    
  },
  plugins: [],
}
export default config

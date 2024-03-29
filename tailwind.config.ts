import type { Config } from 'tailwindcss'

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
      colors:{
          'cta-blue': '#2264E7',
          'primary-blue-light': '#0B3E84',
          'blue-gray-medium': '#687288',
          'blue-black-80':"#666F84"
      },
      borderRadius:{
        '10xl': '44px',
      },
      boxShadow: {
        'solid': '0 2px 0 0 rgba(11, 62, 132, 1)',
        'hover-solid': '0 4px 0 0 rgba(11, 62, 132, 1)',
        'active-solid': '0 0 0 0 rgba(11, 62, 132, 1)'
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover', 'active'], // Enable hover variant for boxShadow
    },
  },
  plugins: [],
}
export default config

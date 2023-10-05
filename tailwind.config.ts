import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(-30px)' }, // Start position
          '30%': { transform: 'translateY(-30px)' }, // Delay 0%-30% duration
          '40%': { transform: 'translateY(0)' }, // Move into the box
          '80%': { transform: 'translateY(0)' }, // Stay in the box for 40% duration
          '100%': { transform: 'translateY(30px)' }, // Move down under the box
        },
      },
      animation: {
        marquee: 'marquee 2s linear',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        wedge: {
          50: '#f2f9f9',
          100: '#ddeff0',
          200: '#bFe0e2',
          300: '#92cace',
          400: '#5faab1',
          500: '#438e96',
          600: '#3b757f',
          700: '#356169',
          800: '#325158',
          900: '#2d464c',
          950: '#1a2c32',
        },
        main: '#f2eef5',
        secondary: '#994ff3',
        tertiary: '#fbdd74',
        title: '#181818',
        paragraph: '#2e2e2e',
        highlight: '#4fc4cf',
        stroke: '#181818',
        background: '#ebebeb',
      },
      fontFamily: {
        body: ['AR One Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

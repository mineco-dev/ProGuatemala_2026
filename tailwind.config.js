/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6E8F0',
          100: '#CCD1E2',
          200: '#99A3C5',
          300: '#6675A8',
          400: '#33478B',
          500: '#021049',
          600: '#010D3A',
          700: '#010A2C',
          800: '#01071D',
          900: '#00030F',
        },
        yellow: {
          50: '#FFFEF8',
          100: '#FFFCF0',
          200: '#FFF9E0',
          300: '#FFF5D0',
          400: '#FFE8AA',
          500: '#FFDB60',
          600: '#FFCE30',
          700: '#FFC100',
          800: '#D9A300',
          900: '#A67E00',
        },
        dark: {
          50: '#F7F7F7',
          100: '#E3E3E3',
          200: '#C8C8C8',
          300: '#A4A4A4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-scale': 'fadeInScale 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'premium': '0 20px 40px rgba(0, 0, 0, 0.1)',
        'premium-hover': '0 30px 60px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(2, 16, 73, 0.3)',
        'glow-lg': '0 0 40px rgba(2, 16, 73, 0.4)',
      },
    },
  },
  plugins: [],
};

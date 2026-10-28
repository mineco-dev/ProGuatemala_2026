/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Azul marino de marca (#11223B) — paleta oficial ProGuatemala (Figma)
        primary: {
          50: '#E7EAEF',
          100: '#C4CAD6',
          200: '#9BA6B9',
          300: '#6E7C96',
          400: '#3F5272',
          500: '#11223B',
          600: '#0E1D32',
          700: '#0B1728',
          800: '#08111E',
          900: '#050A12',
        },
        // Dorado de marca (#FABE0D)
        yellow: {
          50: '#FFF9E6',
          100: '#FEEFBA',
          200: '#FDE488',
          300: '#FCD755',
          400: '#FBCB2E',
          500: '#FABE0D',
          600: '#E0A800',
          700: '#B88A00',
          800: '#8F6B00',
          900: '#674D00',
        },
        // Cian de marca (#2BB9DB)
        accent: {
          50: '#E9F7FB',
          100: '#C7ECF5',
          200: '#97DCEE',
          300: '#66CCE6',
          400: '#44C2E0',
          500: '#2BB9DB',
          600: '#2197B3',
          700: '#19748A',
          800: '#115061',
          900: '#0A3139',
        },
        // Tokens secundarios de la paleta oficial
        brand: {
          navy: '#11223B',
          gold: '#FABE0D',
          cyan: '#2BB9DB',
          green: '#3DB08B',
          cream: '#D7E3AA',
          purple: '#BBA4CE',
        },
        // Verde de marca (#3DB08B)
        green: {
          50: '#ECF8F3',
          100: '#D0EFE3',
          200: '#A4E1CC',
          300: '#74D0B2',
          400: '#50C09D',
          500: '#3DB08B',
          600: '#2E9070',
          700: '#257457',
          800: '#1D5A44',
          900: '#133D2E',
        },
        // Verde crema de marca (#D7E3AA)
        cream: {
          50: '#F7FAEE',
          100: '#EDF3D9',
          200: '#E2EBC2',
          300: '#D7E3AA',
          400: '#C5D688',
          500: '#B2C866',
          600: '#96AC48',
          700: '#748537',
          800: '#556127',
          900: '#3A4319',
        },
        // Morado de marca (#BBA4CE)
        purple: {
          50: '#F6F3F9',
          100: '#ECE6F2',
          200: '#DBCFE6',
          300: '#C9B6DA',
          400: '#BBA4CE',
          500: '#A98BC0',
          600: '#9270A8',
          700: '#745788',
          800: '#574168',
          900: '#3B2C47',
        },
        // --- Tailwind color tokens reasignados a la paleta oficial ---
        // Azul genérico: claros -> cian de marca, oscuros -> azul marino (según contexto)
        blue: {
          50: '#E9F7FB',
          100: '#C7ECF5',
          200: '#97DCEE',
          300: '#66CCE6',
          400: '#44C2E0',
          500: '#2BB9DB',
          600: '#2197B3',
          700: '#19748A',
          800: '#115061',
          900: '#11223B',
          950: '#0B1728',
        },
        // Cian/sky -> cian de marca
        sky: {
          50: '#E9F7FB', 100: '#C7ECF5', 200: '#97DCEE', 300: '#66CCE6', 400: '#44C2E0',
          500: '#2BB9DB', 600: '#2197B3', 700: '#19748A', 800: '#115061', 900: '#0A3139',
        },
        cyan: {
          50: '#E9F7FB', 100: '#C7ECF5', 200: '#97DCEE', 300: '#66CCE6', 400: '#44C2E0',
          500: '#2BB9DB', 600: '#2197B3', 700: '#19748A', 800: '#115061', 900: '#0A3139',
        },
        // Teal/emerald -> verde de marca
        teal: {
          50: '#ECF8F3', 100: '#D0EFE3', 200: '#A4E1CC', 300: '#74D0B2', 400: '#50C09D',
          500: '#3DB08B', 600: '#2E9070', 700: '#257457', 800: '#1D5A44', 900: '#133D2E',
        },
        emerald: {
          50: '#ECF8F3', 100: '#D0EFE3', 200: '#A4E1CC', 300: '#74D0B2', 400: '#50C09D',
          500: '#3DB08B', 600: '#2E9070', 700: '#257457', 800: '#1D5A44', 900: '#133D2E',
        },
        // Lima -> verde crema de marca
        lime: {
          50: '#F7FAEE', 100: '#EDF3D9', 200: '#E2EBC2', 300: '#D7E3AA', 400: '#C5D688',
          500: '#B2C866', 600: '#96AC48', 700: '#748537', 800: '#556127', 900: '#3A4319',
        },
        // Ámbar/naranja -> dorado de marca
        amber: {
          50: '#FFF9E6', 100: '#FEEFBA', 200: '#FDE488', 300: '#FCD755', 400: '#FBCB2E',
          500: '#FABE0D', 600: '#E0A800', 700: '#B88A00', 800: '#8F6B00', 900: '#674D00',
        },
        orange: {
          50: '#FFF9E6', 100: '#FEEFBA', 200: '#FDE488', 300: '#FCD755', 400: '#FBCB2E',
          500: '#FABE0D', 600: '#E0A800', 700: '#B88A00', 800: '#8F6B00', 900: '#674D00',
        },
        // Índigo/violeta/púrpura/fucsia/rosa -> morado de marca
        indigo: {
          50: '#F6F3F9', 100: '#ECE6F2', 200: '#DBCFE6', 300: '#C9B6DA', 400: '#BBA4CE',
          500: '#A98BC0', 600: '#9270A8', 700: '#745788', 800: '#574168', 900: '#3B2C47',
        },
        violet: {
          50: '#F6F3F9', 100: '#ECE6F2', 200: '#DBCFE6', 300: '#C9B6DA', 400: '#BBA4CE',
          500: '#A98BC0', 600: '#9270A8', 700: '#745788', 800: '#574168', 900: '#3B2C47',
        },
        fuchsia: {
          50: '#F6F3F9', 100: '#ECE6F2', 200: '#DBCFE6', 300: '#C9B6DA', 400: '#BBA4CE',
          500: '#A98BC0', 600: '#9270A8', 700: '#745788', 800: '#574168', 900: '#3B2C47',
        },
        pink: {
          50: '#F6F3F9', 100: '#ECE6F2', 200: '#DBCFE6', 300: '#C9B6DA', 400: '#BBA4CE',
          500: '#A98BC0', 600: '#9270A8', 700: '#745788', 800: '#574168', 900: '#3B2C47',
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
        'glow': '0 0 20px rgba(17, 34, 59, 0.3)',
        'glow-lg': '0 0 40px rgba(17, 34, 59, 0.4)',
      },
    },
  },
  plugins: [],
};

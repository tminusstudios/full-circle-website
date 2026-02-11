import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark navy backgrounds (keeping current scheme)
        navy: {
          950: '#0A0F1C', // Deepest navy - primary background
          900: '#0D1423', // Deep navy - section backgrounds
          800: '#13192D', // Dark navy - card backgrounds
        },

        // Industrial blue-grays
        steel: {
          900: '#1A1F2E', // Very dark blue-gray
          800: '#252B3D', // Dark blue-gray
          700: '#2F3749', // Medium-dark blue-gray
          600: '#3D4556', // Medium blue-gray
        },

        // Brand blue (ONLY accent color - keeping current scheme)
        brand: {
          400: '#5CB3FF', // Lighter variant
          500: '#3B9FFF', // Primary brand blue
          600: '#2E8AE6', // Darker variant
        },

        // Neutrals
        white: '#FFFFFF',
        black: '#000000',
        cream: '#F5F3ED',
        charcoal: '#2B2B2B', // Default text color
        gray: {
          100: '#F5F5F7',
          200: '#E5E5E5', // Light borders
          300: '#999999', // Secondary text
        },
      },

      fontFamily: {
        sans: ['Roboto', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Roboto', 'system-ui', '-apple-system', 'sans-serif'],
      },

      fontSize: {
        // Display (hero headlines) - Ultra bold, tight
        'hero': ['clamp(3.5rem, 8vw, 6rem)', { lineHeight: '0.95', letterSpacing: '0.04em', fontWeight: '900' }],
        'hero-mobile': ['clamp(2rem, 6vw, 3.5rem)', { lineHeight: '0.95', letterSpacing: '0.04em', fontWeight: '900' }],

        // H1 - Massive, ultra bold
        'h1': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '0.95', letterSpacing: '0.04em', fontWeight: '900' }],

        // H2 - Section titles
        'h2': ['clamp(1.75rem, 3.5vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '0.03em', fontWeight: '900' }],

        // H3 - Subsections
        'h3': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '0.03em', fontWeight: '700' }],

        // H4 - Labels
        'h4': ['clamp(1rem, 1.5vw, 1.25rem)', { lineHeight: '1.3', letterSpacing: '0.08em', fontWeight: '700' }],

        // Body - Readable
        'body-lg': ['clamp(1rem, 1.25vw, 1.125rem)', { lineHeight: '1.65', fontWeight: '400' }],
        'body': ['clamp(0.9375rem, 1.1vw, 1rem)', { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],

        // Buttons
        'button': ['clamp(0.875rem, 1vw, 0.9375rem)', { lineHeight: '1', letterSpacing: '0.12em', fontWeight: '700' }],
      },

      letterSpacing: {
        'tighter': '0.02em',
        'tight': '0.03em',
        'normal': '0.04em',
        'wide': '0.08em',
        'wider': '0.12em',
        'widest': '0.15em',
        'ultra': '0.25em',
      },

      spacing: {
        'section': '7.5rem',     // 120px vertical section padding
        'section-mobile': '5rem', // 80px mobile
        'container': '1200px',    // Max content width
      },

      boxShadow: {
        'none': 'none',
        // Removed all shadows for flat design
      },

      borderRadius: {
        'none': '0px',
        DEFAULT: '0px', // Zero border-radius everywhere
      },

      transitionDuration: {
        '200': '200ms', // Sharp, quick transitions
      },
    },
  },
  plugins: [],
};

export default config;

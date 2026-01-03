import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#D93025',
          light: '#EA5C52',
          dark: '#B31F15',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#1A1A1A',
          light: '#333333',
          dark: '#000000',
          contrastText: '#FFFFFF',
        },
        accent: {
          main: '#FFD700',
          light: '#FFE55C',
          dark: '#C7A800',
          contrastText: '#1A1A1A',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        heading: ['var(--font-merriweather)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-2': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '800' }],
        'h2': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h6': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      maxWidth: {
        '8xl': '88rem', // 1408px
        '9xl': '96rem', // 1536px
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

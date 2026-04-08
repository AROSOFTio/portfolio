module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#12b347',
        secondary: '#1d2b39',
        surface: '#ffffff',
        background: '#f5f7f2',
        muted: '#e8f1e4',
        accent: '#dff3e6',
        line: '#d6e2d1',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-outfit)', 'Outfit', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        panel: '0 24px 60px rgba(15, 23, 42, 0.08)',
        soft: '0 14px 40px rgba(18, 179, 71, 0.08)',
      },
    },
  },
  plugins: [],
};

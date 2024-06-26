
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#023D54',
        secondary: '#9A6735',
        accent: '#9A6735',
        highlight: '#ffff66',
        'secondary-dark': '#7a4e2b', 
        'primary-dark': '#012838',
        customBackground: '#f5f5f5',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        '@media (prefers-color-scheme: light)': {
          ':root': {
            '--foreground-rgb': '0, 0, 0',
            '--background-start-rgb': '255, 255, 255',
            '--background-end-rgb': '255, 255, 255',
          },
        },
        body: {
          backgroundColor: 'rgb(var(--background-start-rgb))',
          color: 'rgb(var(--foreground-rgb))',
        },
      });
    },
  ],
};

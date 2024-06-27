module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'charity-primary': '#E10505',
        'hospital-primary': '#0077B6',
        'charity-secondary': '#FF6161',
        'hospital-secondary': '#69B4E1',
        'background': '#F7FAFC',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};

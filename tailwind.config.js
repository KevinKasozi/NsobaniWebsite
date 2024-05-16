module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'charity-primary': '#E10505',  // Red for charity
        'hospital-primary': '#0077B6',  // Blue for hospital
        'charity-secondary': '#FF6161',  // Light red for charity
        'hospital-secondary': '#69B4E1',  // Light blue for hospital
        'background': '#F7FAFC',  // Light background
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};

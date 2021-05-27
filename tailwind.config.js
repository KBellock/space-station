module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    top: {
      '1/10': '10%',
      '2/10': '20%',
      '3/10': '30%',
      '4/10': '40%',
      '5/10': '50%',
      '6/10': '60%',
      '7/10': '70%',
      '8/10': '80%',
      '9/10': '90%',
      '10/10': '100%',
    },
    extend: { 
      backgroundImage: theme => ({
        'space-background': "url('/space-background.jpeg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

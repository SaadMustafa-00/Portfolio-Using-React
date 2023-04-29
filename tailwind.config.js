/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors:{

      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'mixed-orange' : '#ff8b00',
      'primary':'#222222',
      'mixed-grey' : '#cbcacd',
      'light-grey' : '#f8f9fa',
      'beige' : '#b1b493',
      'dim-visible' :'#ABABAB',
      'green' : '#71bc42',
      'dark-grey' : '#6c757d',
      'dark-green' : '#1b7f7a',
      'light-purple': '#a990f1',
      'dark-navy' : '#192744',
      'zinc':'#50c4f2',
      'light-primary' : '#333333',
      'maroon': '#851414',
    } 
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
 
}

    



/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        // gap oluşturduk spacing ile

        '0.1':'0.063rem' 
      },
      // backgroundColor: {
      //   'brand-color':"#ff6f39",
      //   'second-brand-color':'#5d3ebc',
      //   'primary-brand-color':'#ff6f39',
      //   'brand-yellow':"#ffd300",
      //   'brand-lightblue':'#dfedf1'
      // },
      // gradientColorStops: {
      //   'brand-color':"#ff6f39",
      //   'second-brand-color':'#5d3ebc',
      //   'primary-brand-color':'#ff6f39',
      // },
      // colors: {
      //   'brand-color':"#ff6f39",
      //   'second-brand-color':'#5d3ebc',
      //   'primary-brand-color':'#ff6f39',
      //   'brand-yellow':"#ffd300",
      //   'brand-lightblue':'#dfedf1'
      // },
  
      backgroundColor: {
        'primary-color':'#FFFFFF',
        'navbar-color':'#00000014',
        'menu-color':'#707070',
        'write-color':'#1A1824',
        'title-color':'#040405',
        'green-color':'#34C47C',
        'gray-color':'#1A182480',
        'container-color':'#0108241A',
        'red-color':'#B70014',
        'border-pruple':'#B70014',
        'icon-color':'#000000'

      },
     
      colors: {
        'primary-color':'#FFFFFF',
        'navbar-color':'#00000014',
        'menu-color':'#707070',
        'write-color':'#1A1824',
        'title-color':'#040405',
        'green-color':'#34C47C',
        'gray-color':'#1A182480',
        'container-color':'#0108241A',
        'red-color':'#B70014',
        'border-pruple':'#B70014',
        'icon-color':'#000000'
      },

     
    },

    
  },
  plugins: [],
}

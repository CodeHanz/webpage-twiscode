/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','career.html','frontend-form.html'],
  theme: {
    container: {
      center: true,
      padding: '10px',
    },
    fontFamily: {
      poppins: ['poppins'],
      roboto: ['roboto'],
    },
    extend: {
      backgroundImage: {
        'logo': "url('/dist/img/logo.png')",
        'background': "url('/dist/img/Rectangle 27.png')",
      },
      colors: {
        primary: '#414141',
        secondary: '#9FD685',
      },
      screens: {
        'sm': '350px',
        'md': '600px',
        'xl': '1320px',
      },

    },
  },
  plugins: [],
}


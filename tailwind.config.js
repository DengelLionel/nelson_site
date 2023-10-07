const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                "blackTransparente":"rgba(0,0,0,.5)",
                "blancoTransparente":"rgba(255.255.255)",
                "plomo":"#595858",
                "plomoTwo":"#9998B3",
                "blueOne":"#274C77",
                "blancoOne":"#EEEFF3",
                "blancoTwo":"#F7F8F7",
                "negro":"#020507",
                "blueTwo":"#E0E9EF",
                "blueTres":"#6893AE",
                "verde":"#3ddf59",
                "verde_hover":"#00e576",
                "azul":"#1a61db",
                "color2":"#07edea",
                "pinkk":"#f152f4",
                "greenn":"#24f057"
                     },
            fontFamily:{
                notosans:'var(--font-notosans)'
            },
            boxShadow: {
                'marca': '35px 0 60px -15px rgba(0, 0, 0, 0.5)',
                'nav': '35px 0 60px -15px rgba(0, 0, 0, 0.5)',
                'shadownuevo':'0 10px 29px 0 rgba(68, 88, 144, 0.1)',
              }
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}

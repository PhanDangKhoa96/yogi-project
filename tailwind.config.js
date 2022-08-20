/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '16px',
                sm: '20px'
            }
        },
        screens: {
            sm: '680px',
            md: '808px',
            lg: '1064px',
            xl: '1320px'
        },
        extend: {
            colors: {
                venetian: '#120D26',
                spanish: '#94959A',
                bittersweet: '#FF7058',
                'container-bg': '#ff71580d'
            },
            boxShadow: {
                'base-shadow': '0px 10px 40px rgba(241, 102, 24, 0.15)'
            },
            borderRadius: {
                'radius-10': '10px',
                'radius-15': '15px'
            }
        }
    },
    plugins: []
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem'
        },
        extend: {
            colors: {
                'text-black': '#120D26',
                'text-light': '#94959A',
                primary: '#FF7058',
                'container-bg': '#ff71580d',
                'bg-black': '#120D26'
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

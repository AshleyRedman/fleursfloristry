const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            white: '#ffffff',
            black: '#1E1E1C',
            green: '#6b766b',
            gray: '#E0E3E0',
            peach: {
                light: '#D89792',
                default: '#B95332',
                dark: '#7E3C22'
            }
        },
        fontFamily: {
            sans: ['Raleway', ...defaultTheme.fontFamily.sans],
            serif: ['courier new', ...defaultTheme.fontFamily.serif]
        },
        extend: {}
    },
    plugins: []
};

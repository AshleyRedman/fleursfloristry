const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        colors: {},
        fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            serif: ['Luminari', ...defaultTheme.fontFamily.serif]
        },
        extend: {}
    },
    plugins: []
};

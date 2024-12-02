/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,tsx}'],
	daisyui: {
		themes: ['night'],
	},
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
}

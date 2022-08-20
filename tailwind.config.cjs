/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Courier']
			},
			screens: {
				sm: '320px'
			}
		}
	},
	plugins: []
};

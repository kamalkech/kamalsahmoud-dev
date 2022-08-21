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
			},
			colors: {
				green: '#32cd32',
				yellow: '#FFE700',
				red: '#FF0000'
			}
		}
	},
	plugins: []
};

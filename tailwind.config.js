/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		theme: {
			extend: {
				fontFamily: {
					inter: ['Inter', 'sans-serif'],
				},
				padding: {
					'4.5': '1.125rem',
				},
				boxShadow: {
					'around': '0px 0px 2px 0px #D4D4D4',
				},
				textColor: {
					'rosa' : '#F83F6C',
				}
			},
		},
	},
	plugins: [],
}
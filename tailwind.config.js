/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*.html', './assets/js/*.js'],
	theme: {
		extend: {},
	},
	plugins: [],
}

// 'npx tailwindcss -i ./src/style/input.css -o ./style.css --watch'
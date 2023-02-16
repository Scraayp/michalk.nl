/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				darkbg: "#111827",
				navdivider: "#525259",
				navtext: "#d9e6eb",
				navhover: "#59d8ff",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			margin: {
				"nav-height": "20px",
				"nav-text-height": "34px",
				"nav-md-mt": "200px",
			},
		},
	},
	plugins: [],
};

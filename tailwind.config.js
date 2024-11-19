/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
		extend: {
			fontSize: {
				xxxs: '0.625rem' /* 10px */,
				xxs: '0.6875rem' /* 11px */,
			},
			boxShadow: {
				paper: '0px 2px 2px 0px rgba(11, 12, 60, 0.04)',
			},
		},
	},
	plugins: [],
};

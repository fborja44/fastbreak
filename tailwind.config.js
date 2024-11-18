/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		extend: {
			fontSize: {
				xxs: '0.625rem' /* 11px */,
			},
			boxShadow: {
				paper: '0px 4px 4px 0px rgba(11, 12, 40, 0.05)',
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				'screen': '100lvh'
			},
			fontSize: {
				'clamp-xs': 'clamp(1rem, 2.5vw ,2.5rem)',
				'clamp-sm': 'clamp(2.75rem, 11vw ,10rem)',
				'clamp': 'clamp(4rem, 14vw ,12.5rem)',
				'clamp-lg': 'clamp(5.5rem, 20vw ,18.75rem)'
			},
			transitionDuration: {
				'1500': '1500ms',
				'2000': '2000ms',
				'2500': '2500ms',
				'3000': '3000ms',
			},
			screens: {
				'xs': '390px',
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
				'3xl': '1920px',
				'4xl': '2560px',
				'5xl': '3840px',
			},
		},
	},
	plugins: [],
}


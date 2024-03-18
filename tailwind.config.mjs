import animations from 'tailwindcss-animated'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkmode: 'class',
	theme: {
		extend: {
			colors: {
			light: 'rgb(var(--honeydew) / <alpha-value>)',
			red: 'rgb(var(--red-pantone) / <alpha-value>)',
			lightblue : 'rgb(var(--non-photo-blue) / <alpha-value>)',
			blueish: 'rgb(var(--cerulean) / <alpha-value>)',
			darkblue: 'rgb(var(--berkeley-blue) / <alpha-value>)',
			dark: 'rgb(var(--darkest-blue) / <alpha-value>)',
		}
		},
	},
	plugins: [animations],
}

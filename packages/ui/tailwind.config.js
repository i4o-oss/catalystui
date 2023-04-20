/** @type {import('tailwindcss').Config} */
const tailwindRadix = require('tailwindcss-radix')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	prefix: 'cui-',
	theme: {
		extend: {
			borderRadius: {
				DEFAULT: 'var(--ui-border-radius)',
			},
			colors: {
				brand: {
					DEFAULT: 'rgb(var(--brand) / <alpha-value>)',
					subtle: 'rgb(var(--brand-subtle) / <alpha-value>)',
					hover: 'rgb(var(--brand-hover) / <alpha-value>)',
					states: 'rgb(var(--brand-states) / <alpha-value>)',
				},

				danger: {
					DEFAULT: 'rgb(var(--danger) / <alpha-value>)',
					subtle: 'rgb(var(--danger-subtle) / <alpha-value>)',
					hover: 'rgb(var(--danger-hover) / <alpha-value>)',
					states: 'rgb(var(--danger-states) / <alpha-value>)',
				},

				primary: {
					DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
					subtle: 'rgb(var(--primary-subtle) / <alpha-value>)',
					foreground:
						'rgb(var(--primary-foreground) / <alpha-value>)',
					'foreground-subtle':
						'rgb(var(--primary-foreground-subtle) / <alpha-value>)',
				},

				ui: {
					DEFAULT: 'rgb(var(--ui) / <alpha-value>)',
					hover: 'rgb(var(--ui-hover) / <alpha-value>)',
					states: 'rgb(var(--ui-states) / <alpha-value>)',
				},
			},
			fontFamily: {
				mono: 'var(--font-mono)',
				sans: 'var(--font-sans)',
				serif: 'var(--font-serif)',
			},
			padding: {
				DEFAULT: 'var(--ui-p)',
				btn: 'var(--ui-btn-p)',
				'icon-btn': 'var(--ui-icon-btn-p)',
			},
		},
	},
	plugins: [tailwindRadix()],
}

/** @type {import('tailwindcss').Config} */
const tailwindRadix = require('tailwindcss-radix')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	prefix: 'cui-',
	theme: {
		extend: {
			animation: {
				'toast-hide': 'toast-hide 100ms ease-in forwards',
				'toast-slide-in-right':
					'toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				'toast-slide-in-bottom':
					'toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				'toast-swipe-out-x':
					'toast-swipe-out-x 100ms ease-out forwards',
				'toast-swipe-out-y':
					'toast-swipe-out-y 100ms ease-out forwards',
			},
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

				subtle: {
					DEFAULT: 'rgb(var(--subtle) / <alpha-value>)',
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
			keyframes: {
				// toast
				'toast-hide': {
					'0%': { opacity: 1 },
					'100%': { opacity: 0 },
				},
				'toast-slide-in-right': {
					'0%': { transform: `translateX(calc(100% + 1rem))` },
					'100%': { transform: 'translateX(0)' },
				},
				'toast-slide-in-bottom': {
					'0%': { transform: `translateY(calc(100% + 1rem))` },
					'100%': { transform: 'translateY(0)' },
				},
				'toast-swipe-out-x': {
					'0%': {
						transform: 'translateX(var(--radix-toast-swipe-end-x))',
					},
					'100%': {
						transform: `translateX(calc(100% + 1rem))`,
					},
				},
				'toast-swipe-out-y': {
					'0%': {
						transform: 'translateY(var(--radix-toast-swipe-end-y))',
					},
					'100%': {
						transform: `translateY(calc(100% + 1rem))`,
					},
				},
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

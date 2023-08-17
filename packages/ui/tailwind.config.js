/** @type {import('tailwindcss').Config} */
const tailwindRadix = require('tailwindcss-radix')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	prefix: 'cui-',
	theme: {
		extend: {
			animation: {
				'enter-from-right': 'enter-from-right 0.25s ease',
				'enter-from-left': 'enter-from-left 0.25s ease',
				'exit-to-right': 'exit-to-right 0.25s ease',
				'exit-to-left': 'exit-to-left 0.25s ease',
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
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					subtle: 'hsl(var(--primary-subtle) / <alpha-value>)',
				},

				ui: {
					DEFAULT: 'hsl(var(--ui) / <alpha-value>)',
					hover: 'hsl(var(--ui-hover) / <alpha-value>)',
					states: 'hsl(var(--ui-states) / <alpha-value>)',
				},

				subtle: {
					DEFAULT: 'hsl(var(--subtle) / <alpha-value>)',
					int: 'hsl(var(--subtle-int) / <alpha-value>)',
					'int-states':
						'hsl(var(--subtle-int-states) / <alpha-value>)',
				},

				brand: {
					DEFAULT: 'hsl(var(--brand) / <alpha-value>)',
					states: 'hsl(var(--brand-states) / <alpha-value>)',
				},

				foreground: {
					DEFAULT: 'hsl(var(--foreground) / <alpha-value>)',
					subtle: 'hsl(var(--foreground-subtle) / <alpha-value>)',
					btn: 'hsl(var(--foreground-btn) / <alpha-value>)',
				},

				danger: {
					DEFAULT: 'hsl(var(--danger) / <alpha-value>)',
					states: 'hsl(var(--danger-states) / <alpha-value>)',
				},

				success: {
					DEFAULT: 'hsl(var(--success) / <alpha-value>)',
					states: 'hsl(var(--success-states) / <alpha-value>)',
				},
			},
			fontFamily: {
				mono: 'var(--font-mono)',
				sans: 'var(--font-sans)',
				serif: 'var(--font-serif)',
			},
			keyframes: {
				'enter-from-right': {
					'0%': { transform: 'translateX(200px)', opacity: 0 },
					'100%': { transform: 'translateX(0)', opacity: 1 },
				},
				'enter-from-left': {
					'0%': { transform: 'translateX(-200px)', opacity: 0 },
					'100%': { transform: 'translateX(0)', opacity: 1 },
				},
				'exit-to-right': {
					'0%': { transform: 'translateX(0)', opacity: 1 },
					'100%': { transform: 'translateX(200px)', opacity: 0 },
				},
				'exit-to-left': {
					'0%': { transform: 'translateX(0)', opacity: 1 },
					'100%': { transform: 'translateX(-200px)', opacity: 0 },
				},
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
				btn: 'var(--ui-p-btn)',
				select: 'var(--ui-p-select)',
				'icon-btn': 'var(--ui-p-icon-btn)',
			},
		},
	},
	plugins: [tailwindRadix()],
}

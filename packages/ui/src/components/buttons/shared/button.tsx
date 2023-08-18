import type { ButtonProps } from '../types'
import clsx from 'clsx'
import React from 'react'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, ...props }, ref) => {
		return (
			<button
				aria-label={props.ariaLabel}
				ref={ref}
				{...props}
				className={clsx([
					'cui-group cui-inline-flex cui-items-center cui-justify-center cui-rounded cui-p-select cui-space-x-2 cui-select-none', // display, look, spacing, behavior
					'!cui-bg-ui hover:!cui-bg-ui-hover active:!cui-bg-ui-states focus:!cui-bg-ui-states disabled:!cui-bg-ui-states/75', // background
					'cui-text-foreground cui-text-sm cui-font-medium', // text
					'cui-border cui-border-transparent', // borders, ourlines
					'focus:cui-outline-none focus-visible:cui-ring-blend-darken focus-visible:cui-ring-2 focus-visible:cui-ring-offset-2', // focus rings. TODO: needs rework
					// 'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75',
					'cui-transition-all cui-duration-200', // animations
					'radix-state-open:cui-bg-ui radix-state-on:cui-bg-ui radix-state-instant-open:cui-bg-ui', // radix states
					`${props.className}`, // custom
				])}
				disabled={props.disabled}
				onClick={props.onClick}
			>
				{props.leftIcon}
				{props.loading && (
					<svg
						className='-cui-ml-1 cui-mr-2 cui-h-4 cui-w-4 cui-animate-spin cui-text-white'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
					>
						<circle
							className='opacity-25'
							cx='12'
							cy='12'
							r='10'
							stroke='currentColor'
							strokeWidth='4'
						/>
						<path
							className='opacity-75'
							fill='currentColor'
							d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
						/>
					</svg>
				)}
				{props.loading ? props.loadingText : children}
				{props.rightIcon}
			</button>
		)
	}
)

Button.displayName = 'Button'
export default Button

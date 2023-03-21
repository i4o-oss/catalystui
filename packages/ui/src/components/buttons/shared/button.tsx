import type { ButtonProps } from '../types'
import cx from 'classnames'
import React from 'react'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, ...props }, ref) => {
		return (
			<button
				ref={ref}
				{...props}
				// className={`focus-visible:ring-blend-darken inline-flex items-center justify-center rounded-md border border-transparent text-sm font-semibold hover:bg-blend-darken focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className} ${bg} ${padding} ${shadow} ${textColor}`}
				className={cx(
					'cui-inline-flex cui-select-none cui-items-center cui-justify-center cui-rounded-md cui-px-4 cui-py-2 cui-text-sm cui-font-medium',
					'!cui-bg-white cui-text-gray-700 hover:!cui-bg-gray-50 dark:!cui-bg-gray-800 dark:cui-text-gray-100 dark:hover:!cui-bg-gray-900',
					'hover:cui-bg-gray-50',
					'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75',
					// Register all radix states
					'cui-group',
					'radix-state-open:cui-bg-gray-50 dark:radix-state-open:cui-bg-gray-900',
					'radix-state-on:cui-bg-gray-50 dark:radix-state-on:cui-bg-gray-900',
					'radix-state-instant-open:cui-bg-gray-50 radix-state-delayed-open:cui-bg-gray-50',
					`${props.className}`
				)}
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

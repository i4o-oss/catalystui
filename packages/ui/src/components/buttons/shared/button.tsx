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
					'inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium',
					'!bg-white text-gray-700 hover:!bg-gray-50 dark:!bg-gray-800 dark:text-gray-100 dark:hover:!bg-gray-900',
					'hover:bg-gray-50',
					'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
					// Register all radix states
					'group',
					'radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900',
					'radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900',
					'radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50',
					`${props.className}`
				)}
				disabled={props.disabled}
				onClick={props.onClick}
			>
				{props.leftIcon}
				{props.loading && (
					<svg
						className='-ml-1 mr-2 h-4 w-4 animate-spin text-white'
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

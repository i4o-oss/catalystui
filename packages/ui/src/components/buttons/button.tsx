import type { FC } from 'react'
import type { ButtonProps } from './types'
import Tooltip from '../tooltip'

const Button: FC<ButtonProps> = ({
	bg = '!bg-gray-700 hover:!bg-gray-800 disabled:hover:!bg-gray-700 dark:hover:!bg-gray-800 disabled:dark:hover:!bg-gray-700',
	borderRadius = 'rounded-md',
	children,
	className,
	disabled,
	leftIcon,
	loading,
	loadingText,
	onClick,
	onMouseDown,
	padding = 'px-4 py-1',
	rightIcon,
	shadow = '',
	textColor = 'text-gray-200',
	textSize = 'text-sm',
	tooltip = '',
	type = 'button',
}) => {
	if (tooltip) {
		return (
			<Tooltip content={tooltip}>
				<button
					className={`focus-visible:ring-blend-darken inline-flex items-center justify-center ${borderRadius} border border-transparent ${textSize} font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-200 ${className} ${bg} ${padding} ${shadow} ${textColor} disabled:opacity-80 space-x-2 ${
						loading ? 'cursor-wait' : ''
					}`}
					disabled={disabled || loading}
					onClick={onClick}
					onMouseDown={onMouseDown}
					type={type}
				>
					{leftIcon}
					{loading && (
						<svg
							className='-ml-1 h-4 w-4 animate-spin text-white'
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
					<span>{loading ? loadingText : children}</span>
					{rightIcon}
				</button>
			</Tooltip>
		)
	}
	return (
		<button
			className={`focus-visible:ring-blend-darken inline-flex items-center justify-center ${borderRadius} border border-transparent ${textSize} font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-200 ${className} ${bg} ${padding} ${shadow} ${textColor} disabled:opacity-80  space-x-2 ${
				loading ? 'cursor-wait' : 'disabled:cursor-not-allowed'
			}`}
			disabled={disabled || loading}
			onClick={onClick}
			onMouseDown={onMouseDown}
			type={type}
		>
			{leftIcon}
			{loading && (
				<svg
					className='-ml-1 h-4 w-4 animate-spin text-white'
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
			<span>{loading ? loadingText : children}</span>
			{rightIcon}
		</button>
	)
}

Button.displayName = 'Button'
export default Button

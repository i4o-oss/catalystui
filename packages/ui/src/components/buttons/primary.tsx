import React from 'react'
import type { ButtonProps } from './types'
import Tooltip from '../tooltip'

// TODO: Remove important ! modifier here when switching to Rescribe
const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			ariaLabel = '',
			children,
			className,
			disabled,
			leftIcon,
			loading,
			loadingText,
			onClick,
			onMouseDown,
			rightIcon,
			textSize = 'cui-text-sm',
			tooltip = '',
			type = 'button',
			...props
		},
		ref
	) => {
		if (tooltip) {
			return (
				<Tooltip content={tooltip}>
					<button
						aria-label={ariaLabel}
						className={`!cui-bg-brand hover:!cui-bg-brand-hover active:!cui-bg-brand-states focus:!cui-bg-brand-states disabled:!cui-bg-brand-states cui-text-primary-foreground focus-visible:cui-ring-blend-darken cui-inline-flex cui-items-center cui-justify-center cui-rounded cui-border cui-border-transparent ${textSize} cui-font-semibold focus:cui-outline-none focus-visible:cui-ring-2 focus-visible:cui-ring-offset-2 cui-transition-all cui-duration-200 ${className} cui-p-btn disabled:cui-opacity-80 cui-space-x-2 ${
							loading ? 'cui-cursor-wait' : ''
						}`}
						disabled={disabled || loading}
						onClick={onClick}
						onMouseDown={onMouseDown}
						{...props}
						ref={ref}
						type={type}
					>
						{leftIcon}
						{loading && (
							<svg
								className='-cui-ml-1 cui-h-4 cui-w-4 cui-animate-spin cui-text-primary-foreground'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
							>
								<circle
									className='cui-opacity-25'
									cx='12'
									cy='12'
									r='10'
									stroke='currentColor'
									strokeWidth='4'
								/>
								<path
									className='cui-opacity-75'
									fill='currentColor'
									d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
								/>
							</svg>
						)}
						{loading ? loadingText : children}
						{rightIcon}
					</button>
				</Tooltip>
			)
		}
		return (
			<button
				aria-label={ariaLabel}
				className={`!cui-bg-brand hover:!cui-bg-brand-hover active:!cui-bg-brand-states focus:!cui-bg-brand-states disabled:!cui-bg-brand-states cui-text-primary-foreground focus-visible:cui-ring-blend-darken cui-inline-flex cui-items-center cui-justify-center cui-rounded cui-border cui-border-transparent ${textSize} cui-font-semibold focus:cui-outline-none focus-visible:cui-ring-2 focus-visible:cui-ring-offset-2 cui-transition-all cui-duration-200 ${className} cui-p-btn disabled:cui-opacity-80 cui-space-x-2 ${
					loading ? 'cui-cursor-wait' : ''
				}`}
				disabled={disabled || loading}
				onClick={onClick}
				onMouseDown={onMouseDown}
				{...props}
				ref={ref}
				type={type}
			>
				{leftIcon}
				{loading && (
					<svg
						className='-cui-ml-1 cui-h-4 cui-w-4 cui-animate-spin cui-text-primary-foreground'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
					>
						<circle
							className='cui-opacity-25'
							cx='12'
							cy='12'
							r='10'
							stroke='currentColor'
							strokeWidth='4'
						/>
						<path
							className='cui-opacity-75'
							fill='currentColor'
							d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
						/>
					</svg>
				)}
				{loading ? loadingText : children}
				{rightIcon}
			</button>
		)
	}
)

export default PrimaryButton

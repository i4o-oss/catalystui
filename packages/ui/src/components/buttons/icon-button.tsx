import React from 'react'
import type { ReactNode } from 'react'
import type { ButtonProps } from './types'
import Tooltip from '../tooltip'

interface IconButtonProps extends ButtonProps {
	icon: ReactNode
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	(
		{
			ariaLabel = '',
			bg = 'cui-bg-transparent',
			className,
			disabled,
			icon,
			onClick,
			onMouseDown,
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
						className={`!cui-bg-ui hover:!cui-bg-ui-hover active:!cui-bg-ui-states focus:!cui-bg-ui-states disabled:!cui-bg-primary-states cui-text-primary-foreground focus-visible:cui-ring-blend-darken cui-inline-flex cui-items-center cui-justify-center cui-rounded cui-border cui-border-transparent cui-font-semibold focus:cui-outline-none focus-visible:cui-ring-2 focus-visible:cui-ring-offset-2 cui-transition-all cui-duration-200 ${className} cui-p-icon-btn disabled:cui-opacity-80 cui-space-x-2`}
						disabled={disabled}
						onClick={onClick}
						onMouseDown={onMouseDown}
						{...props}
						ref={ref}
						type={type}
					>
						{icon}
					</button>
				</Tooltip>
			)
		}
		return (
			<button
				aria-label={ariaLabel}
				className={`!cui-bg-ui hover:!cui-bg-ui-hover active:!cui-bg-ui-states focus:!cui-bg-ui-states disabled:!cui-bg-primary-states cui-text-primary-foreground focus-visible:cui-ring-blend-darken cui-inline-flex cui-items-center cui-justify-center cui-rounded cui-border cui-border-transparent cui-font-semibold focus:cui-outline-none focus-visible:cui-ring-2 focus-visible:cui-ring-offset-2 cui-transition-all cui-duration-200 ${className} cui-p-icon-btn disabled:cui-opacity-80 cui-space-x-2`}
				disabled={disabled}
				onClick={onClick}
				onMouseDown={onMouseDown}
				{...props}
				ref={ref}
				type={type}
			>
				{icon}
			</button>
		)
	}
)

export default IconButton

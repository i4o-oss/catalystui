import React from 'react'
import type { ReactNode } from 'react'
import type { ButtonProps } from './types'
import Tooltip from '../tooltip'
import clsx from 'clsx'

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
		const button = (
			<button
				aria-label={ariaLabel}
				className={clsx([
					'cui-inline-flex cui-items-center cui-justify-center cui-rounded cui-p-icon-btn', // display, look, spacing
					'!cui-bg-ui hover:!cui-bg-ui-hover active:!cui-bg-ui-states focus:!cui-bg-ui-states disabled:!cui-bg-ui-states/75', // background
					'cui-text-foreground cui-font-semibold', // text
					'cui-border cui-border-transparent', // borders, ourlines
					'focus:cui-outline-none focus-visible:cui-ring-blend-darken focus-visible:cui-ring-2 focus-visible:cui-ring-offset-2', // focus rings. TODO: needs rework
					'cui-transition-all cui-duration-200', // animations
					`${className}`, // custom
				])}
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

		if (tooltip) {
			return <Tooltip content={tooltip}>{button}</Tooltip>
		}

		return button
	}
)

export default IconButton

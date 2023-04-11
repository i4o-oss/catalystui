import type { ButtonProps } from './types'
import Button from './button'
import React from 'react'

interface PrimaryButtonProps extends ButtonProps {
	bg?: string
	shadow?: string
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
	(
		{
			ariaLabel = '',
			bg = '!cui-bg-brand-500 hover:!cui-bg-brand-600 disabled:hover:!cui-bg-brand-500 dark:hover:!cui-bg-brand-600 disabled:dark:hover:!cui-bg-brand-500',
			children,
			className,
			disabled,
			leftIcon,
			loading,
			loadingText,
			onClick,
			padding = 'cui-px-4 cui-py-1',
			rightIcon,
			shadow = 'cui-shadow-md',
			textColor = 'cui-text-white',
			textSize = 'cui-text-sm',
			tooltip = '',
			type = 'button',
			...props
		},
		ref
	) => {
		return (
			<Button
				ariaLabel={ariaLabel}
				bg={bg}
				className={`${className} ${shadow}`}
				disabled={disabled}
				leftIcon={leftIcon}
				loading={loading}
				loadingText={loadingText}
				onClick={onClick}
				padding={padding}
				{...props}
				ref={ref}
				rightIcon={rightIcon}
				textColor={textColor}
				textSize={textSize}
				tooltip={tooltip}
				type={type}
			>
				{children}
			</Button>
		)
	}
)

export default PrimaryButton

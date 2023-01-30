import type { FC } from 'react'
import type { ButtonProps } from './types'
import Button from './button'

interface PrimaryButtonProps extends ButtonProps {
	bg?: string
	shadow?: string
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
	bg = '!bg-brand-500 hover:!bg-brand-600 disabled:hover:!bg-brand-500 dark:hover:!bg-brand-600 disabled:dark:hover:!bg-brand-500',
	children,
	className,
	disabled,
	leftIcon,
	loading,
	loadingText,
	onClick,
	padding = 'px-4 py-1',
	rightIcon,
	shadow = 'shadow-md',
	textColor = 'text-white',
	textSize = 'text-sm',
	tooltip = '',
	type = 'button',
}) => {
	return (
		<Button
			bg={bg}
			className={`${className} ${shadow}`}
			disabled={disabled}
			leftIcon={leftIcon}
			loading={loading}
			loadingText={loadingText}
			onClick={onClick}
			padding={padding}
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

export default PrimaryButton

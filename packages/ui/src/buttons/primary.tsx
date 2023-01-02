import type { FC } from 'react'
import type { ButtonProps } from './types'
import Button from './button'

interface PrimaryButtonProps extends ButtonProps {
	bg?: string
	shadow?: string
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
	bg = 'bg-brand-500',
	children,
	className,
	disabled,
	loading,
	loadingText,
	onClick,
	shadow = 'shadow-md',
	textColor = 'text-white',
	tooltip = '',
	type = 'button',
}) => {
	return (
		<Button
			bg={bg}
			className={`${className} ${shadow}`}
			disabled={disabled}
			loading={loading}
			loadingText={loadingText}
			onClick={onClick}
			textColor={textColor}
			tooltip={tooltip}
			type={type}
		>
			{children}
		</Button>
	)
}

export default PrimaryButton

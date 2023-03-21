import type { FC } from 'react'
import type { ButtonProps } from './types'
import Button from './button'

interface DangerButtonProps extends ButtonProps {
	bg?: string
	shadow?: string
}

const DangerButton: FC<DangerButtonProps> = ({
	bg = '!cui-bg-red-500 hover:!cui-bg-red-600 disabled:hover:!cui-bg-red-500 dark:hover:!cui-bg-red-600 disabled:dark:hover:!cui-bg-red-500',
	children,
	className,
	disabled,
	leftIcon,
	loading,
	loadingText,
	onClick,
	padding = 'cui-px-4 cui-py-1',
	rightIcon,
	shadow = '',
	textColor = 'cui-text-white',
	textSize = 'cui-text-sm',
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
			type={type}
		>
			{children}
		</Button>
	)
}

export default DangerButton

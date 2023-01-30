import type { FC } from 'react'
import type { ButtonProps } from './types'
import Button from './button'

interface DangerButtonProps extends ButtonProps {
	bg?: string
	shadow?: string
}

const DangerButton: FC<DangerButtonProps> = ({
	bg = '!bg-red-500 hover:!bg-red-600 disabled:hover:!bg-red-500 dark:hover:!bg-red-600 disabled:dark:hover:!bg-red-500',
	children,
	className,
	disabled,
	leftIcon,
	loading,
	loadingText,
	onClick,
	padding = 'px-4 py-1',
	rightIcon,
	shadow = '',
	textColor = 'text-white',
	textSize = 'text-sm',
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

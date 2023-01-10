import type { FC } from 'react'
import type { ButtonProps } from './types'
import Button from './button'

interface DangerButtonProps extends ButtonProps {
	bg?: string
	shadow?: string
}

const DangerButton: FC<DangerButtonProps> = ({
	bg = '!bg-red-500',
	children,
	className,
	disabled,
	loading,
	loadingText,
	onClick,
	padding = 'px-4 py-1',
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
			loading={loading}
			loadingText={loadingText}
			onClick={onClick}
			padding={padding}
			textColor={textColor}
			textSize={textSize}
			type={type}
		>
			{children}
		</Button>
	)
}

export default DangerButton

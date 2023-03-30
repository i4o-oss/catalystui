import React from 'react'
import type { FC, ReactNode } from 'react'
import type { ButtonProps } from './types'
import Button from './button'

interface IconButtonProps extends ButtonProps {
	icon: ReactNode
}

const IconButton: FC<IconButtonProps> = ({
	ariaLabel = '',
	bg = 'cui-bg-transparent',
	className,
	icon,
	onClick,
	padding = 'cui-p-3',
	shadow = '',
	textColor = 'cui-text-white',
	tooltip = '',
}) => {
	return (
		<Button
			ariaLabel={ariaLabel}
			className={`focus-visible:cui-ring-blend-darken cui-inline-flex cui-justify-center cui-rounded-md cui-border cui-border-transparent cui-text-sm cui-font-semibold focus:cui-outline-none focus-visible:cui-ring-2 focus-visible:cui-ring-offset-2 ${className} ${bg} ${padding} ${shadow} ${textColor}`}
			onClick={onClick}
			padding={padding}
			tooltip={tooltip}
		>
			{icon}
		</Button>
	)
}

export default IconButton

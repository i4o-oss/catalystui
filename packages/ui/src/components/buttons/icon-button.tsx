import React from 'react'
import type { FC, ReactNode } from 'react'
import type { ButtonProps } from './types'
import Button from './button'

interface IconButtonProps extends ButtonProps {
	icon: ReactNode
}

const IconButton: FC<IconButtonProps> = ({
	bg = 'bg-transparent',
	className,
	icon,
	onClick,
	padding = 'p-4',
	shadow = '',
	textColor = 'text-white',
	tooltip = '',
}) => {
	return (
		<Button
			className={`focus-visible:ring-blend-darken inline-flex justify-center rounded-md border border-transparent text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className} ${bg} ${padding} ${shadow} ${textColor}`}
			onClick={onClick}
			padding={padding}
			tooltip={tooltip}
		>
			{icon}
		</Button>
	)
}

export default IconButton

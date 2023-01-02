import type { MouseEventHandler, ReactNode } from 'react'

export enum ButtonSize {
	LG,
	MD,
	sm,
	XS,
}

export interface ButtonProps {
	bg?: string
	borderRadius?: string
	children?: ReactNode | string
	className?: string
	disabled?: boolean
	loading?: boolean
	loadingText?: string
	onClick?: MouseEventHandler<HTMLButtonElement>
	padding?: string
	leftIcon?: ReactNode
	rightIcon?: ReactNode
	shadow?: string
	size?: ButtonSize
	textColor?: string
	tooltip?: string
	type?: 'button' | 'submit' | 'reset'
}

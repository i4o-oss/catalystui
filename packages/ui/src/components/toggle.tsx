import type { FC, ReactNode } from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import Button from './buttons/shared/button'

interface ToggleProps {
	ariaLabel: string
	children: ReactNode
	defaultPressed?: boolean
	pressed?: boolean
	onPressedChange?: (pressed: boolean) => void
}

// TODO: update styles after changing shared button styles
const Toggle: FC<ToggleProps> = ({
	ariaLabel,
	children,
	defaultPressed = false,
	pressed,
	onPressedChange,
}) => (
	<TogglePrimitive.Root
		aria-label={ariaLabel}
		defaultPressed={defaultPressed}
		pressed={pressed}
		onPressedChange={onPressedChange}
	>
		<Button>{children}</Button>
	</TogglePrimitive.Root>
)

export default Toggle

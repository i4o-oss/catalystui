import type { FC, ReactNode } from 'react'
import * as ToolbarPrimitive from '@radix-ui/react-toolbar'

interface ToolbarProps {
	ariaLabel: string
	children: ReactNode
	className?: string
}

const Toolbar: FC<ToolbarProps> = ({ ariaLabel, children, className }) => {
	return (
		<ToolbarPrimitive.Root aria-label={ariaLabel} className={className}>
			{children}
		</ToolbarPrimitive.Root>
	)
}

export default Toolbar

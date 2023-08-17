import type { FC, ReactNode } from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import clsx from 'clsx'
import { Button } from './buttons'

interface HoverCardProps {
	children: ReactNode
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean) => void
	trigger: ReactNode | string
}

const HoverCard: FC<HoverCardProps> = ({
	children,
	defaultOpen,
	open,
	onOpenChange,
	trigger,
}) => {
	return (
		<HoverCardPrimitive.Root
			defaultOpen={defaultOpen}
			open={open}
			onOpenChange={onOpenChange}
		>
			<HoverCardPrimitive.Trigger asChild={typeof trigger !== 'string'}>
				{typeof trigger !== 'string' ? (
					trigger
				) : (
					<Button>{trigger}</Button>
				)}
			</HoverCardPrimitive.Trigger>
			<HoverCardPrimitive.Content
				align='center'
				sideOffset={4}
				className={clsx([
					'radix-side-top:cui-animate-slide-up radix-side-bottom:cui-animate-slide-down',
					'cui-max-w-md cui-rounded cui-p-4 md:cui-w-full',
					'cui-bg-ui',
					'cui-z-[100] cui-shadow-lg',
					'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75',
				])}
			>
				<HoverCardPrimitive.Arrow className='cui-fill-current cui-text-ui' />
				{children}
			</HoverCardPrimitive.Content>
		</HoverCardPrimitive.Root>
	)
}

export default HoverCard

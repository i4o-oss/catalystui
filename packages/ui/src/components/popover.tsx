import type { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import cx from 'classnames'
import { Cross1Icon } from '@radix-ui/react-icons'

interface PopoverProps {
	align?: 'start' | 'end' | 'center'
	close?: boolean
	children: string | ReactNode
	side?: 'top' | 'right' | 'bottom' | 'left'
	sideOffset?: number
	title?: string | ReactNode
	trigger: ReactNode
	open?: boolean
	onOpenChange?: Dispatch<SetStateAction<boolean>>
}

const Popover: FC<PopoverProps> = ({
	align = 'center',
	close = true,
	children,
	side = 'bottom',
	sideOffset = 0,
	title,
	trigger,
	open,
	onOpenChange,
}) => {
	return (
		<div className='cui-relative cui-inline-block cui-text-left'>
			<PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
				{trigger ? (
					<PopoverPrimitive.Trigger>
						{trigger}
					</PopoverPrimitive.Trigger>
				) : null}
				<PopoverPrimitive.Portal>
					<PopoverPrimitive.Content
						align={align}
						avoidCollisions={true}
						className={cx(
							'radix-side-top:cui-animate-slide-up radix-side-bottom:cui-animate-slide-down',
							'cui-w-auto cui-rounded-lg cui-p-4 cui-shadow-md',
							'cui-bg-primary-subtle'
						)}
						side={side}
						sideOffset={sideOffset}
					>
						<PopoverPrimitive.Arrow className='cui-fill-current cui-text-primary-subtle' />
						{title ? (
							<h3 className='cui-text-md cui-font-medium cui-text-primary-foreground'>
								{title}
							</h3>
						) : null}
						{children}
						{close && (
							<PopoverPrimitive.Close
								className={cx(
									'cui-absolute cui-top-3.5 cui-right-3.5 cui-inline-flex cui-items-center cui-justify-center cui-rounded-full cui-p-1',
									'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75'
								)}
							>
								<Cross1Icon className='cui-h-4 cui-w-4 cui-text-primary-foreground-subtle hover:text-primary-foreground' />
							</PopoverPrimitive.Close>
						)}
					</PopoverPrimitive.Content>
				</PopoverPrimitive.Portal>
			</PopoverPrimitive.Root>
		</div>
	)
}

export default Popover

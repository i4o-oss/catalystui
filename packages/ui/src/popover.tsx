import type { FC, ReactNode } from 'react'
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
}

const Popover: FC<PopoverProps> = ({
	align = 'center',
	close = true,
	children,
	side = 'bottom',
	sideOffset = 0,
	title,
	trigger,
}) => {
	return (
		<div className='relative inline-block text-left'>
			<PopoverPrimitive.Root>
				<PopoverPrimitive.Trigger>{trigger}</PopoverPrimitive.Trigger>
				<PopoverPrimitive.Portal>
					<PopoverPrimitive.Content
						align={align}
						avoidCollisions={true}
						className={cx(
							'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
							'w-auto rounded-lg p-4 shadow-md',
							'bg-white dark:bg-gray-700',
							'text-black dark:text-white'
						)}
						side={side}
						sideOffset={sideOffset}
					>
						<PopoverPrimitive.Arrow className='fill-current text-white dark:text-gray-700' />
						<h3 className='text-md font-medium text-gray-900 dark:text-gray-100'>
							{title}
						</h3>
						{children}
						{close && (
							<PopoverPrimitive.Close
								className={cx(
									'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
									'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
								)}
							>
								<Cross1Icon className='h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400' />
							</PopoverPrimitive.Close>
						)}
					</PopoverPrimitive.Content>
				</PopoverPrimitive.Portal>
			</PopoverPrimitive.Root>
		</div>
	)
}

export default Popover

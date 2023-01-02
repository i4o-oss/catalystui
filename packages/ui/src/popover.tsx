import type { FC, ReactNode } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import cx from 'classnames'
import { Cross1Icon } from '@radix-ui/react-icons'

const PopoverRoot = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverContent = PopoverPrimitive.Content
const PopoverArrow = PopoverPrimitive.Arrow
const PopoverClose = PopoverPrimitive.Close
const PopoverPortal = PopoverPrimitive.Portal

interface PopoverProps {
	align?: 'start' | 'end' | 'center'
	close?: boolean
	children: string | ReactNode
	sideOffset?: number
	title?: string | ReactNode
	trigger: ReactNode
}

const Popover: FC<PopoverProps> = ({
	align = 'center',
	close = true,
	children,
	sideOffset = 4,
	title,
	trigger,
}) => {
	return (
		<div className='relative inline-block text-left'>
			<PopoverRoot>
				<PopoverTrigger asChild>{trigger}</PopoverTrigger>
				<PopoverPortal>
					<PopoverContent
						align={align}
						className={cx(
							'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
							'w-auto rounded-lg p-4 shadow-md',
							'bg-white dark:bg-gray-700',
							'text-black dark:text-white'
						)}
						sideOffset={sideOffset}
					>
						<PopoverArrow className='fill-current text-white dark:text-gray-700' />
						<h3 className='text-md font-medium text-gray-900 dark:text-gray-100'>
							{title}
						</h3>
						{children}
						{close && (
							<PopoverClose
								className={cx(
									'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
									'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
								)}
							>
								<Cross1Icon className='h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400' />
							</PopoverClose>
						)}
					</PopoverContent>
				</PopoverPortal>
			</PopoverRoot>
		</div>
	)
}

export default Popover

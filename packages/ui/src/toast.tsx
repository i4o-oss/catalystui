import type { FC, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import cx from 'classnames'
import { Button } from './buttons'

type ToastProps = {
	title?: ReactNode | string
	description?: ReactNode | string
	action?: ReactNode
	actionAltText?: string
	trigger?: ReactNode
	isOpen?: boolean
	duration?: number
}

// TODO: Fix description and action styles
// TODO: Add support for triggering toast from a function call

const Toast: FC<ToastProps> = ({
	title,
	description,
	action,
	actionAltText,
	trigger,
	isOpen,
	duration = 3000,
}) => {
	const [isToastOpen, setIsToastOpen] = useState(isOpen || false)
	const timerRef = useRef<number>(0)

	useEffect(() => {
		if (!trigger) {
			setIsToastOpen(false)
			timerRef.current = window.setTimeout(() => {
				setIsToastOpen(true)
			}, 100)
		}

		return () => clearTimeout(timerRef.current)
	}, [trigger, duration, isOpen])

	return (
		<ToastPrimitive.ToastProvider swipeDirection='right'>
			{trigger && (
				<Button
					onClick={() => {
						setIsToastOpen(false)
						window.clearTimeout(timerRef.current)
						timerRef.current = window.setTimeout(() => {
							setIsToastOpen(true)
						}, 100)
					}}
				>
					{trigger}
				</Button>
			)}
			<ToastPrimitive.Root
				className={cx(
					'fixed inset-x-4 bottom-4 z-50 w-auto rounded-lg shadow-lg md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-full md:max-w-sm',
					'bg-white dark:bg-gray-800',
					'radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right',
					'radix-state-closed:animate-toast-hide',
					'radix-swipe-end:animate-toast-swipe-out',
					'translate-x-radix-toast-swipe-move-x',
					'radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]',
					'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
				)}
				duration={duration}
				open={isToastOpen}
				onOpenChange={setIsToastOpen}
			>
				<div className='flex'>
					<div className='flex w-0 flex-1 items-center py-4 pl-5'>
						<div className='radix w-full'>
							<ToastPrimitive.ToastTitle className='text-sm font-medium text-gray-900 dark:text-gray-100'>
								{title}
							</ToastPrimitive.ToastTitle>
							<ToastPrimitive.ToastDescription
								asChild
								className='mt-1 text-sm text-gray-800 dark:text-gray-200'
							>
								{description}
							</ToastPrimitive.ToastDescription>
						</div>
					</div>
				</div>
				{action && (
					<div className='flex'>
						<div className='flex flex-col space-y-1 px-3 py-2'>
							<div className='flex h-0 flex-1'>
								<ToastPrimitive.ToastAction
									asChild
									altText={actionAltText as string}
								>
									{action}
								</ToastPrimitive.ToastAction>
							</div>
							<div className='flex h-0 flex-1'>
								<ToastPrimitive.Close className='flex w-full items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:text-gray-100 dark:hover:bg-gray-900'>
									Dismiss
								</ToastPrimitive.Close>
							</div>
						</div>
					</div>
				)}
			</ToastPrimitive.Root>
			<ToastPrimitive.Viewport />
		</ToastPrimitive.ToastProvider>
	)
}

export default Toast

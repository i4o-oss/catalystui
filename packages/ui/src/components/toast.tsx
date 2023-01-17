import type { FC, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import cx from 'classnames'
import { Button } from './buttons'

type ToastProps = {
	action?: ReactNode | string
	actionAltText?: string
	description?: ReactNode | string
	dismiss?: boolean
	dismissText?: string
	duration?: number
	isOpen?: boolean
	title?: ReactNode | string
	triggerLabel?: ReactNode | string
}

// TODO: Fix description and action styles
// TODO: Add support for triggering toast from a function call

const Toast: FC<ToastProps> = ({
	action,
	actionAltText,
	description,
	dismiss = true,
	dismissText = 'Dismiss',
	duration = 3000,
	isOpen,
	title,
	triggerLabel,
}) => {
	const [isToastOpen, setIsToastOpen] = useState(isOpen || false)
	const timerRef = useRef<number>(0)

	useEffect(() => {
		if (!triggerLabel) {
			setIsToastOpen(false)
			timerRef.current = window.setTimeout(() => {
				setIsToastOpen(true)
			}, 100)
		}

		return () => clearTimeout(timerRef.current)
	}, [triggerLabel, duration, isOpen])

	return (
		<ToastPrimitive.Provider swipeDirection='right'>
			{triggerLabel && (
				<Button
					onClick={() => {
						setIsToastOpen(false)
						window.clearTimeout(timerRef.current)
						timerRef.current = window.setTimeout(() => {
							setIsToastOpen(true)
						}, 100)
					}}
				>
					{triggerLabel}
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
							<ToastPrimitive.Title className='text-sm font-semibold text-gray-900 dark:text-gray-100'>
								{title}
							</ToastPrimitive.Title>
							<ToastPrimitive.Description className='mt-1 text-sm text-gray-800 dark:text-gray-200'>
								{description}
							</ToastPrimitive.Description>
						</div>
					</div>
					{action && dismiss && (
						// TODO: Figure out why this divider is not working
						<div className='grid grid-cols-1 divider-y divider-gray-200 dark:divider-gray-700'>
							{typeof action === 'string' ? (
								<ToastPrimitive.Action
									altText={actionAltText as string}
									className='flex items-center justify-center rounded-tr-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75 dark:text-gray-100 dark:hover:bg-gray-900'
								>
									{action}
								</ToastPrimitive.Action>
							) : (
								<ToastPrimitive.Action
									asChild
									altText={actionAltText as string}
									className='flex items-center justify-center rounded-tr-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75 dark:text-gray-100 dark:hover:bg-gray-900'
								>
									{action}
								</ToastPrimitive.Action>
							)}
							<ToastPrimitive.Close className='flex items-center justify-center rounded-br-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:text-gray-100 dark:hover:bg-gray-900'>
								{dismissText}
							</ToastPrimitive.Close>
						</div>
					)}
					{action && (
						<div className='flex flex-col justify-center px-3 py-2 '>
							{typeof action === 'string' ? (
								<ToastPrimitive.Action
									altText={actionAltText as string}
									className='flex w-full items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75 dark:text-gray-100 dark:hover:bg-gray-900'
								>
									{action}
								</ToastPrimitive.Action>
							) : (
								<ToastPrimitive.Action
									asChild
									altText={actionAltText as string}
									className='flex w-full items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75 dark:text-gray-100 dark:hover:bg-gray-900'
								>
									{action}
								</ToastPrimitive.Action>
							)}
						</div>
					)}
				</div>
			</ToastPrimitive.Root>
			<ToastPrimitive.Viewport />
		</ToastPrimitive.Provider>
	)
}

export default Toast

import type { FC, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import cx from 'classnames'
import { Button } from './buttons'

interface ToastProps {
	action?: ReactNode | string
	actionAltText?: string
	description?: ReactNode | string
	dismiss?: ReactNode | string
	duration?: number
	isOpen?: boolean
	title?: ReactNode | string
	trigger?: ReactNode | string
}

// TODO: Fix description and action styles
// TODO: Add support for triggering toast from a function call
// TODO: Add examples for triggering the toast from a button click and from a function call

const Toast: FC<ToastProps> = ({
	action,
	actionAltText,
	description,
	dismiss,
	duration = 3000,
	isOpen,
	title,
	trigger,
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
		<ToastPrimitive.Provider swipeDirection='right'>
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
					'focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75'
				)}
				duration={duration}
				open={isToastOpen}
				onOpenChange={setIsToastOpen}
			>
				<div className='flex'>
					<div className='flex flex-1 items-center py-4 pl-5 border-r border-gray-200 dark:border-gray-700'>
						<div className='radix w-full pr-4'>
							<ToastPrimitive.Title className='text-sm font-semibold text-gray-900 dark:text-gray-100'>
								{title}
							</ToastPrimitive.Title>
							<ToastPrimitive.Description className='mt-1 text-sm text-gray-800 dark:text-gray-200'>
								{description}
							</ToastPrimitive.Description>
						</div>
					</div>
					{action && dismiss && (
						<div className='grid grid-cols-1'>
							{typeof action === 'string' ? (
								<div className='flex items-center justify-center rounded-tr-lg text-sm font-medium hover:bg-gray-50 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75 dark:text-gray-100 dark:hover:bg-gray-900'>
									<ToastPrimitive.Action
										altText={actionAltText as string}
										className='px-3 py-2 text-brand-500'
									>
										{action}
									</ToastPrimitive.Action>
								</div>
							) : (
								<div className='flex items-center justify-center rounded-tr-lg text-sm font-medium hover:bg-gray-50 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75 dark:text-gray-100 dark:hover:bg-gray-900'>
									<ToastPrimitive.Action
										asChild
										altText={actionAltText as string}
										className='px-3 py-2 text-brand-500'
									>
										{action}
									</ToastPrimitive.Action>
								</div>
							)}
							{typeof dismiss === 'string' ? (
								<div className='flex items-center justify-center border-t border-gray-200 dark:border-gray-700 rounded-br-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:text-gray-100 dark:hover:bg-gray-900'>
									<ToastPrimitive.Close className='px-3 py-2'>
										{dismiss}
									</ToastPrimitive.Close>
								</div>
							) : (
								<div className='flex items-center justify-center border-t border-gray-200 dark:border-gray-700 rounded-br-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:text-gray-100 dark:hover:bg-gray-900'>
									<ToastPrimitive.Close
										asChild
										className='px-3 py-2'
									>
										{dismiss}
									</ToastPrimitive.Close>
								</div>
							)}
						</div>
					)}
					{action && !dismiss && (
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

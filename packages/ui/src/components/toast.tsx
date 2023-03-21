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
					'cui-fixed cui-inset-x-4 cui-bottom-4 cui-z-50 cui-w-auto cui-rounded-lg cui-shadow-lg md:cui-top-4 md:cui-right-4 md:cui-left-auto md:cui-bottom-auto md:cui-w-full md:cui-max-w-sm',
					'cui-bg-white dark:cui-bg-gray-800',
					'radix-state-open:cui-animate-toast-slide-in-bottom md:radix-state-open:cui-animate-toast-slide-in-right',
					'radix-state-closed:cui-animate-toast-hide',
					'radix-swipe-end:cui-animate-toast-swipe-out',
					'cui-translate-x-cui-radix-toast-swipe-move-x',
					'radix-swipe-cancel:cui-translate-x-0 radix-swipe-cancel:cui-duration-200 radix-swipe-cancel:cui-ease-[ease]',
					'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75'
				)}
				duration={duration}
				open={isToastOpen}
				onOpenChange={setIsToastOpen}
			>
				<div className='cui-flex'>
					<div className='cui-flex cui-flex-1 cui-items-center cui-py-4 cui-pl-5 cui-border-r cui-border-gray-200 dark:cui-border-gray-700'>
						<div className='cui-radix cui-w-full cui-pr-4'>
							<ToastPrimitive.Title className='cui-text-sm cui-font-semibold cui-text-gray-900 dark:cui-text-gray-100'>
								{title}
							</ToastPrimitive.Title>
							<ToastPrimitive.Description className='cui-mt-1 cui-text-sm cui-text-gray-800 dark:cui-text-gray-200'>
								{description}
							</ToastPrimitive.Description>
						</div>
					</div>
					{action && dismiss && (
						<div className='cui-grid cui-grid-cols-1'>
							{typeof action === 'string' ? (
								<div className='cui-flex cui-items-center cui-justify-center cui-rounded-tr-lg cui-text-sm cui-font-medium hover:cui-bg-gray-50 focus:cui-z-10 focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75 dark:cui-text-gray-100 dark:hover:cui-bg-gray-900'>
									<ToastPrimitive.Action
										altText={actionAltText as string}
										className='cui-px-3 cui-py-2 cui-text-brand-500'
									>
										{action}
									</ToastPrimitive.Action>
								</div>
							) : (
								<div className='cui-flex cui-items-center cui-justify-center cui-rounded-tr-lg cui-text-sm cui-font-medium hover:cui-bg-gray-50 focus:cui-z-10 focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75 dark:cui-text-gray-100 dark:hover:cui-bg-gray-900'>
									<ToastPrimitive.Action
										asChild
										altText={actionAltText as string}
										className='cui-px-3 cui-py-2 cui-text-brand-500'
									>
										{action}
									</ToastPrimitive.Action>
								</div>
							)}
							{typeof dismiss === 'string' ? (
								<div className='cui-flex cui-items-center cui-justify-center cui-border-t cui-border-gray-200 dark:cui-border-gray-700 cui-rounded-br-lg cui-text-sm cui-font-medium cui-text-gray-700 hover:cui-bg-gray-50 focus:cui-z-10 focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75 dark:cui-text-gray-100 dark:hover:cui-bg-gray-900'>
									<ToastPrimitive.Close className='cui-px-3 cui-py-2'>
										{dismiss}
									</ToastPrimitive.Close>
								</div>
							) : (
								<div className='cui-flex cui-items-center cui-justify-center cui-border-t cui-border-gray-200 dark:cui-border-gray-700 cui-rounded-br-lg cui-text-sm cui-font-medium cui-text-gray-700 hover:cui-bg-gray-50 focus:cui-z-10 focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75 dark:cui-text-gray-100 dark:hover:cui-bg-gray-900'>
									<ToastPrimitive.Close
										asChild
										className='cui-px-3 cui-py-2'
									>
										{dismiss}
									</ToastPrimitive.Close>
								</div>
							)}
						</div>
					)}
					{action && !dismiss && (
						<div className='cui-flex cui-flex-col cui-justify-center cui-px-3 cui-py-2 '>
							{typeof action === 'string' ? (
								<ToastPrimitive.Action
									altText={actionAltText as string}
									className='cui-flex cui-w-full cui-items-center cui-justify-center cui-rounded-lg cui-px-3 cui-py-2 cui-text-sm cui-font-medium cui-text-gray-700 hover:cui-bg-gray-50 focus:cui-z-10 focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75 dark:cui-text-gray-100 dark:hover:cui-bg-gray-900'
								>
									{action}
								</ToastPrimitive.Action>
							) : (
								<ToastPrimitive.Action
									asChild
									altText={actionAltText as string}
									className='cui-flex cui-w-full cui-items-center cui-justify-center cui-rounded-lg cui-px-3 cui-py-2 cui-text-sm cui-font-medium cui-text-gray-700 hover:cui-bg-gray-50 focus:cui-z-10 focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75 dark:cui-text-gray-100 dark:hover:cui-bg-gray-900'
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

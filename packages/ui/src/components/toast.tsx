import type { FC, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import clsx from 'clsx'
import { Button } from './buttons'

interface ToastProps {
	action: ReactNode | string
	actionAltText: string
	defaultOpen?: boolean
	description?: ReactNode | string
	dismiss?: ReactNode | string
	duration?: number
	open?: boolean
	onOpenChange?: (open: boolean) => void
	title?: ReactNode | string
	trigger?: ReactNode | string
}

// TODO: Fix description and action styles
// TODO: Add support for triggering toast from a function call
// TODO: Add examples for triggering the toast from a button click and from a function call

const Toast: FC<ToastProps> = ({
	action,
	actionAltText,
	defaultOpen = false,
	description,
	dismiss,
	duration = 3000,
	open,
	onOpenChange,
	title,
	trigger,
}) => {
	const [isToastOpen, setIsToastOpen] = useState<boolean>(
		defaultOpen || false
	)
	const timerRef = useRef<number>(0)

	useEffect(() => {
		if (!trigger) {
			setIsToastOpen(false)
			onOpenChange?.(false)
			timerRef.current = window.setTimeout(() => {
				setIsToastOpen(true)
				onOpenChange?.(true)
			}, 100)
		}

		return () => clearTimeout(timerRef.current)
	}, [trigger, duration, open])

	return (
		<ToastPrimitive.Provider swipeDirection='right'>
			{trigger && (
				<Button
					onClick={() => {
						setIsToastOpen(false)
						onOpenChange?.(false)
						window.clearTimeout(timerRef.current)
						timerRef.current = window.setTimeout(() => {
							setIsToastOpen(true)
							onOpenChange?.(true)
						}, 100)
					}}
				>
					{trigger}
				</Button>
			)}
			<ToastPrimitive.Root
				className={clsx([
					'cui-fixed cui-inset-x-4 cui-bottom-4 cui-z-50 cui-w-auto cui-rounded-lg cui-shadow-lg md:cui-top-4 md:cui-right-4 md:cui-left-auto md:cui-bottom-auto md:cui-w-full md:cui-max-w-sm',
					'cui-bg-ui',
					'radix-state-open:cui-animate-toast-slide-in-bottom md:radix-state-open:cui-animate-toast-slide-in-right',
					'radix-state-closed:cui-animate-toast-hide',
					'radix-swipe-end:cui-animate-toast-swipe-out',
					'cui-translate-x-cui-radix-toast-swipe-move-x',
					'radix-swipe-cancel:cui-translate-x-0 radix-swipe-cancel:cui-duration-200 radix-swipe-cancel:cui-ease-[ease]',
					'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75',
				])}
				defaultOpen={defaultOpen}
				duration={duration}
				open={open || isToastOpen}
				onOpenChange={onOpenChange || setIsToastOpen}
			>
				<div className='cui-flex'>
					<div className='cui-flex cui-flex-1 cui-items-center cui-py-4 cui-pl-4'>
						<div className='cui-radix cui-w-full cui-pr-4'>
							<ToastPrimitive.Title className='cui-text-sm cui-font-semibold cui-text-foreground'>
								{title}
							</ToastPrimitive.Title>
							<ToastPrimitive.Description className='cui-mt-1 cui-text-sm cui-text-foreground-subtle'>
								{description}
							</ToastPrimitive.Description>
						</div>
					</div>
					{action && dismiss && (
						<div className='cui-grid cui-grid-cols-1 cui-border-l cui-border-subtle'>
							<div
								className={clsx([
									'cui-flex cui-items-center cui-justify-center cui-rounded-tr',
									'cui-text-sm cui-text-foreground cui-font-medium',
									'cui-bg-ui hover:cui-bg-ui-hover',
									'focus:cui-z-10 focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75',
								])}
							>
								<ToastPrimitive.Action
									asChild={typeof action !== 'string'}
									altText={actionAltText as string}
									className='cui-px-3 cui-py-2 cui-text-brand-500'
								>
									{action}
								</ToastPrimitive.Action>
							</div>
							<div
								className={clsx([
									'cui-flex cui-items-center cui-justify-center cui-rounded-br',
									'cui-text-sm cui-text-foreground cui-font-medium',
									'cui-border-t cui-border-subtle',
									'cui-bg-ui hover:cui-bg-ui-hover',
									'focus:cui-z-10 focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75',
								])}
							>
								<ToastPrimitive.Close
									asChild={typeof dismiss !== 'string'}
									className='cui-px-3 cui-py-2'
								>
									{dismiss}
								</ToastPrimitive.Close>
							</div>
						</div>
					)}
					{action && !dismiss && (
						<div className='cui-flex cui-flex-col cui-justify-center cui-px-3 cui-py-2 '>
							<ToastPrimitive.Action
								asChild={typeof action !== 'string'}
								altText={actionAltText as string}
								className={clsx([
									'cui-flex cui-w-full cui-items-center cui-justify-center cui-rounded-lg cui-px-3 cui-py-2',
									'cui-text-sm cui-text-foreground cui-font-medium',
									'cui-bg-ui hover:cui-bg-ui-hover',
									'focus:cui-z-10 focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75',
								])}
							>
								{action}
							</ToastPrimitive.Action>
						</div>
					)}
				</div>
			</ToastPrimitive.Root>
			<ToastPrimitive.Viewport />
		</ToastPrimitive.Provider>
	)
}

export default Toast

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'
import cx from 'classnames'
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react'

interface Props {
	action?: ReactNode
	cancel?: ReactNode
	children: ReactNode
	description?: ReactNode | string
	trigger?: ReactNode
	title: ReactNode | string
	isOpen?: boolean
	onOpenChange?: Dispatch<SetStateAction<boolean>>
}

const Dialog: FC<Props> = ({
	action,
	cancel,
	children,
	description,
	title,
	trigger = null,
	isOpen,
	onOpenChange,
}) => {
	return (
		<DialogPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
			{trigger ? (
				<DialogPrimitive.Trigger asChild>
					{trigger}
				</DialogPrimitive.Trigger>
			) : null}
			<DialogPrimitive.Portal>
				<DialogPrimitive.Overlay
					forceMount
					className='fixed inset-0 z-20 bg-black/50'
				/>
				<DialogPrimitive.Content
					forceMount
					className={cx(
						'fixed z-50',
						'min-w-[96vw] rounded-lg p-4 md:w-full',
						'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
						'bg-white dark:bg-gray-800',
						'focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75'
					)}
				>
					<DialogPrimitive.Title className='text-md font-medium text-gray-900 dark:text-gray-100'>
						{title}
					</DialogPrimitive.Title>
					<DialogPrimitive.Description className='mt-2 text-sm font-normal text-gray-700 dark:text-gray-400'>
						{description}
					</DialogPrimitive.Description>

					<div className='mt-4'>{children}</div>

					<div className='mt-4 flex justify-end space-x-2'>
						{cancel && (
							<DialogPrimitive.Close>
								{cancel}
							</DialogPrimitive.Close>
						)}
						{action && (
							<DialogPrimitive.Close>
								{action}
							</DialogPrimitive.Close>
						)}
					</div>

					<DialogPrimitive.Close
						className={cx(
							'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
							'focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75'
						)}
					>
						<Cross1Icon className='h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400' />
					</DialogPrimitive.Close>
				</DialogPrimitive.Content>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	)
}

export default Dialog

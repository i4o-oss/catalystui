import type { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import * as AlertPrimitive from '@radix-ui/react-alert-dialog'
import cx from 'classnames'

type AlertProps = {
	title?: ReactNode | string
	description?: ReactNode | string
	cancel: ReactNode
	action: ReactNode
	trigger?: ReactNode
	isOpen?: boolean
	onOpenChange?: Dispatch<SetStateAction<boolean>>
}

const Alert: FC<AlertProps> = ({
	title = '',
	description = '',
	cancel,
	action,
	trigger = null,
	isOpen,
	onOpenChange,
}) => {
	return (
		<AlertPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
			{trigger && (
				<AlertPrimitive.Trigger asChild>
					{trigger}
				</AlertPrimitive.Trigger>
			)}
			<AlertPrimitive.Portal>
				<AlertPrimitive.Overlay
					forceMount
					className='fixed inset-0 z-20 bg-black/50'
				/>
				<AlertPrimitive.Content
					forceMount
					className={cx(
						'fixed z-50',
						'w-[95vw] max-w-md rounded-lg p-4 md:w-full',
						'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
						'bg-white dark:bg-gray-800',
						'focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75'
					)}
				>
					{title && (
						<AlertPrimitive.Title className='text-sm font-medium text-gray-900 dark:text-gray-100'>
							{title}
						</AlertPrimitive.Title>
					)}
					{description && (
						<AlertPrimitive.Description className='mt-2 text-sm font-normal text-gray-700 dark:text-gray-400'>
							{description}
						</AlertPrimitive.Description>
					)}
					<div className='mt-4 flex justify-end space-x-2'>
						<AlertPrimitive.Cancel>{cancel}</AlertPrimitive.Cancel>
						<AlertPrimitive.Action>{action}</AlertPrimitive.Action>
					</div>
				</AlertPrimitive.Content>
			</AlertPrimitive.Portal>
		</AlertPrimitive.Root>
	)
}

export default Alert

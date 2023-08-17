import type { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import * as AlertPrimitive from '@radix-ui/react-alert-dialog'
import clsx from 'clsx'

type AlertProps = {
	title?: ReactNode | string
	description?: ReactNode | string
	cancel: ReactNode
	action: ReactNode
	trigger?: ReactNode
	open?: boolean
	onOpenChange?: Dispatch<SetStateAction<boolean>>
}

const Alert: FC<AlertProps> = ({
	title = '',
	description = '',
	cancel,
	action,
	trigger = null,
	open,
	onOpenChange,
}) => {
	return (
		<AlertPrimitive.Root open={open} onOpenChange={onOpenChange}>
			{trigger ? (
				<AlertPrimitive.Trigger asChild>
					{trigger}
				</AlertPrimitive.Trigger>
			) : null}
			<AlertPrimitive.Portal>
				<AlertPrimitive.Overlay
					forceMount
					className='cui-fixed cui-inset-0 cui-z-20 cui-bg-black/50'
				/>
				<AlertPrimitive.Content
					forceMount
					className={clsx([
						'cui-w-[95vw] cui-max-w-md cui-rounded cui-p-4 md:cui-w-full',
						'cui-fixed cui-z-50 cui-top-[50%] cui-left-[50%] -cui-translate-x-[50%] -cui-translate-y-[50%]',
						'cui-bg-ui',
						'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75',
					])}
				>
					{title && (
						<AlertPrimitive.Title className='cui-text-sm cui-font-semibold cui-text-foreground'>
							{title}
						</AlertPrimitive.Title>
					)}
					{description && (
						<AlertPrimitive.Description className='cui-mt-2 cui-text-sm cui-font-normal cui-text-foreground-subtle'>
							{description}
						</AlertPrimitive.Description>
					)}
					<div className='cui-mt-4 cui-flex cui-justify-end cui-space-x-2'>
						<AlertPrimitive.Cancel>{cancel}</AlertPrimitive.Cancel>
						<AlertPrimitive.Action>{action}</AlertPrimitive.Action>
					</div>
				</AlertPrimitive.Content>
			</AlertPrimitive.Portal>
		</AlertPrimitive.Root>
	)
}

export default Alert

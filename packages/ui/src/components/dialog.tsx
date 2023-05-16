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
	open?: boolean
	onOpenChange?: Dispatch<SetStateAction<boolean>>
}

const Dialog: FC<Props> = ({
	action,
	cancel,
	children,
	description,
	title,
	trigger = null,
	open,
	onOpenChange,
}) => {
	return (
		<DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
			{trigger ? (
				<DialogPrimitive.Trigger asChild>
					{trigger}
				</DialogPrimitive.Trigger>
			) : null}
			<DialogPrimitive.Portal>
				<DialogPrimitive.Overlay
					forceMount
					className='cui-fixed cui-inset-0 cui-bg-black/50'
				/>
				<DialogPrimitive.Content
					forceMount
					className={cx(
						'cui-fixed',
						'cui-rounded-lg',
						'cui-top-[50%] cui-left-[50%] -cui-translate-x-[50%] -cui-translate-y-[50%]',
						'cui-bg-primary-subtle',
						'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75'
					)}
				>
					{title ? (
						<DialogPrimitive.Title className='cui-text-md cui-font-semibold cui-text-primary-foreground'>
							{title}
						</DialogPrimitive.Title>
					) : null}
					{description ? (
						<DialogPrimitive.Description className='cui-mt-2 cui-mb-4 cui-text-sm cui-font-normal cui-text-primary-foreground-subtle'>
							{description}
						</DialogPrimitive.Description>
					) : null}

					<div className='cui-text-primary-foreground'>
						{children}
					</div>

					{action || cancel ? (
						<div className='cui-mt-4 cui-flex cui-justify-end cui-space-x-2 cui-px-4 cui-pb-4'>
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
					) : null}

					<DialogPrimitive.Close
						className={cx(
							'cui-absolute cui-top-3.5 cui-right-3.5 cui-z-[100] cui-inline-flex cui-items-center cui-justify-center cui-rounded-full cui-p-1',
							'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75'
						)}
					>
						<Cross1Icon className='cui-h-4 cui-w-4 cui-text-primary-foreground-subtle hover:text-primary-foreground' />
					</DialogPrimitive.Close>
				</DialogPrimitive.Content>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	)
}

export default Dialog

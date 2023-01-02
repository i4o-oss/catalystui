import { Transition } from '@headlessui/react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'
import cx from 'classnames'
import type { FC } from 'react'
import React, { Fragment, useState } from 'react'

const TransitionRoot = Transition.Root
const TransitionChild = Transition.Child
const DialogRoot = DialogPrimitive.Root
const DialogContent = DialogPrimitive.Content
const DialogTitle = DialogPrimitive.Title
const DialogTrigger = DialogPrimitive.Trigger
const DialogDescription = DialogPrimitive.Description
const DialogClose = DialogPrimitive.Close

interface Props {
	trigger: React.ReactNode
	title: React.ReactNode
	description?: React.ReactNode
	content: React.ReactNode
	footer?: React.ReactNode
}

const Dialog: FC<Props> = ({
	content,
	description,
	footer,
	title,
	trigger,
}) => {
	let [isOpen, setIsOpen] = useState(false)

	return (
		<DialogRoot open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<TransitionRoot show={isOpen}>
				<TransitionChild
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<DialogPrimitive.Overlay
						forceMount
						className='fixed inset-0 z-20 bg-black/50'
					/>
				</TransitionChild>
				<TransitionChild
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
				>
					<DialogContent
						forceMount
						className={cx(
							'fixed z-50',
							'w-[95vw] max-w-md rounded-lg p-4 md:w-full',
							'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
							'bg-white dark:bg-gray-800',
							'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
						)}
					>
						<DialogTitle className='text-sm font-medium text-gray-900 dark:text-gray-100'>
							{title}
						</DialogTitle>
						<DialogDescription className='mt-2 text-sm font-normal text-gray-700 dark:text-gray-400'>
							{description}
						</DialogDescription>
						{content}

						<div className='mt-4 flex justify-end'>{footer}</div>

						<DialogClose
							className={cx(
								'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
								'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
							)}
						>
							<Cross1Icon className='h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400' />
						</DialogClose>
					</DialogContent>
				</TransitionChild>
			</TransitionRoot>
		</DialogRoot>
	)
}

export default Dialog

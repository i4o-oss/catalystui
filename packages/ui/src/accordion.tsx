import type { FC, ReactNode } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type {
	AccordionSingleProps,
	AccordionMultipleProps,
} from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import cx from 'classnames'

const AccordionRoot = AccordionPrimitive.Root
const AccordionContent = AccordionPrimitive.Content
const AccordionHeader = AccordionPrimitive.Header
const AccordionItem = AccordionPrimitive.Item
const AccordionTrigger = AccordionPrimitive.Trigger

interface AccordionItemType {
	id: string
	title: string | ReactNode
	content: string | ReactNode
}

interface AccordionSingle extends AccordionSingleProps {
	collapsible: boolean
	defaultValue: string
	items: AccordionItemType[]
	type: 'single'
}

interface AccordionMultiple extends AccordionMultipleProps {
	collapsible: boolean
	defaultValue: string[] | undefined
	items: AccordionItemType[]
	type: 'multiple'
}

const Accordion: FC<AccordionSingle | AccordionMultiple> = ({
	collapsible,
	defaultValue,
	items,
	type,
}) => {
	return (
		// @ts-ignore
		<AccordionRoot
			type={type}
			defaultValue={defaultValue}
			collapsible={collapsible}
		>
			{items.map((item) => {
				return (
					<AccordionItem
						className='rounded-lg focus-within:ring focus-within:ring-purple-500 focus-within:ring-opacity-75 focus:outline-none'
						key={item.id}
						value={item.id}
					>
						<AccordionHeader className='w-full'>
							<AccordionTrigger
								className={cx(
									'group',
									'radix-state-open:rounded-t-lg radix-state-closed:rounded-lg',
									'focus:outline-none',
									'inline-flex w-full items-center justify-between bg-white px-4 py-2 text-left dark:bg-gray-800'
								)}
							>
								<span className='text-sm font-medium text-gray-900 dark:text-gray-100'>
									{item.title}
								</span>
								<ChevronDownIcon
									className={cx(
										'ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out dark:text-gray-400',
										'group-radix-state-open:rotate-180 group-radix-state-open:duration-300'
									)}
								/>
							</AccordionTrigger>
							<AccordionContent className='pt-r1 w-full rounded-b-lg bg-white px-4 pb-3 dark:bg-gray-800'>
								<div className='text-sm text-gray-700 dark:text-gray-400'>
									{item.content}
								</div>
							</AccordionContent>
						</AccordionHeader>
					</AccordionItem>
				)
			})}
		</AccordionRoot>
	)
}

export default Accordion

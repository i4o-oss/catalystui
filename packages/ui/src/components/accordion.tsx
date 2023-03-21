import type { FC, ReactNode } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type {
	AccordionSingleProps,
	AccordionMultipleProps,
} from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import cx from 'classnames'

interface AccordionItemType {
	id: string
	title: string | ReactNode
	content: string | ReactNode
}

interface AccordionSingle extends AccordionSingleProps {
	collapsible?: boolean
	defaultValue?: string
	items: AccordionItemType[]
	type: 'single'
}

interface AccordionMultiple extends AccordionMultipleProps {
	collapsible?: boolean
	defaultValue?: string[]
	items: AccordionItemType[]
	type: 'multiple'
}

const Accordion: FC<AccordionSingle | AccordionMultiple> = ({
	collapsible = true,
	defaultValue,
	items,
	type = 'single',
}) => {
	return (
		// @ts-ignore
		<AccordionPrimitive.Root
			className={`${
				type === 'multiple'
					? 'radix-state-closed:cui-divide-y radix-state-closed:cui-divide-gray-200 radix-state-closed:dark:cui-divide-gray-700'
					: ''
			}`}
			type={type}
			defaultValue={defaultValue}
			collapsible={collapsible}
		>
			{items.map((item, index) => {
				return (
					<AccordionPrimitive.Item
						className={`cui-w-[20rem] cui-rounded-lg focus-within:cui-ring focus-within:cui-ring-brand-500 focus-within:cui-ring-opacity-75 focus:cui-outline-none`}
						key={item.id}
						value={item.id}
					>
						<AccordionPrimitive.Header className='cui-w-full'>
							<AccordionPrimitive.Trigger
								className={cx(
									'cui-group',
									` ${
										index === 0
											? 'radix-state-open:cui-rounded-t-lg radix-state-closed:cui-rounded-t-lg'
											: ''
									} ${
										index === items.length - 1
											? 'radix-state-closed:cui-rounded-b-lg'
											: ''
									}`,
									'focus:cui-outline-none',
									'cui-inline-flex cui-w-full cui-items-center cui-justify-between !cui-bg-white cui-px-4 cui-py-2 cui-text-left dark:!cui-bg-gray-800',
									'cui-border-b cui-border-gray-600 dark:cui-border-gray-600'
								)}
							>
								<span className='cui-text-sm cui-font-medium cui-text-gray-900 dark:cui-text-gray-100'>
									{item.title}
								</span>
								<ChevronDownIcon
									className={cx(
										'cui-ml-2 cui-h-5 cui-w-5 cui-shrink-0 cui-text-gray-700 cui-ease-in-out dark:cui-text-gray-400',
										'group-radix-state-open:cui-rotate-180 group-radix-state-open:cui-duration-300'
									)}
								/>
							</AccordionPrimitive.Trigger>
							<AccordionPrimitive.Content
								className={cx(
									'cui-pt-2 cui-w-full cui-bg-gray-100 cui-px-4 cui-pb-2 dark:cui-bg-gray-700',
									`${
										index === items.length - 1
											? 'radix-state-open:cui-rounded-b-lg'
											: ''
									}`
								)}
							>
								<div className='cui-text-sm cui-text-gray-700 dark:cui-text-gray-400'>
									{item.content}
								</div>
							</AccordionPrimitive.Content>
						</AccordionPrimitive.Header>
					</AccordionPrimitive.Item>
				)
			})}
		</AccordionPrimitive.Root>
	)
}

export default Accordion

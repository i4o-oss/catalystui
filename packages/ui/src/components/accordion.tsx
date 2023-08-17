import type { FC, ReactNode } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type {
	AccordionMultipleProps,
	AccordionSingleProps,
} from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

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
					? 'radix-state-closed:cui-divide-y radix-state-closed:cui-divide-subtle'
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
								className={clsx([
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
									'cui-inline-flex cui-w-full cui-items-center cui-justify-between !cui-bg-ui cui-px-4 cui-py-2 cui-text-left',
									'cui-border-b cui-border-subtle',
								])}
							>
								<span className='cui-text-sm cui-font-medium cui-text-foreground'>
									{item.title}
								</span>
								<ChevronDownIcon
									className={clsx([
										'cui-ml-2 cui-h-5 cui-w-5 cui-shrink-0 cui-text-foreground cui-ease-in-out',
										'group-radix-state-open:cui-rotate-180 group-radix-state-open:cui-duration-300',
									])}
								/>
							</AccordionPrimitive.Trigger>
							<AccordionPrimitive.Content
								className={clsx([
									'cui-pt-2 cui-w-full cui-bg-ui-states cui-px-4 cui-pb-2',
									`${
										index === items.length - 1
											? 'radix-state-open:cui-rounded-b-lg'
											: ''
									}`,
								])}
							>
								<div className='cui-text-sm cui-text-foreground'>
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

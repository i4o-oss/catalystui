import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import cx from 'classnames'
import { useState } from 'react'
import type { FC, ReactNode } from 'react'
import Button from './buttons/shared/button'

interface SelectItem {
	disabled?: boolean
	label: string | ReactNode
	value: string
}

// TODO: Add default label, onchange
interface Props {
	defaultValue?: string
	items: SelectItem[]
	name: string
	onValueChange?: (item: SelectItem) => void
}

const Select: FC<Props> = ({ defaultValue, items, name, onValueChange }) => {
	const [selected, setSelected] = useState(items[0])

	const handleSelect = (value: string) => {
		const item = items.find((item) => item.value === value)
		if (item) {
			setSelected(item)
			onValueChange?.(item)
		}
	}

	return (
		<SelectPrimitive.Root
			defaultValue={defaultValue}
			onValueChange={handleSelect}
			value={selected.value}
		>
			<SelectPrimitive.Trigger asChild>
				<Button className=''>
					<SelectPrimitive.Value>
						{selected.label}
					</SelectPrimitive.Value>
					<SelectPrimitive.Icon className='cui-ml-2'>
						<ChevronDownIcon />
					</SelectPrimitive.Icon>
				</Button>
			</SelectPrimitive.Trigger>
			<SelectPrimitive.Portal>
				<SelectPrimitive.Content>
					<SelectPrimitive.ScrollUpButton className='cui-flex cui-items-center cui-justify-center cui-text-gray-700 dark:cui-text-gray-300'>
						<ChevronUpIcon />
					</SelectPrimitive.ScrollUpButton>
					<SelectPrimitive.Viewport className='cui-bg-white dark:cui-bg-gray-800 cui-p-2 cui-rounded-lg cui-shadow-lg'>
						<SelectPrimitive.Group>
							{items.map((f, i) => (
								<SelectPrimitive.Item
									key={`${f.value}-${i}`}
									disabled={f?.disabled}
									className={cx(
										'cui-relative cui-flex cui-items-center cui-px-8 cui-py-2 cui-rounded-md cui-text-sm cui-text-gray-700 dark:cui-text-gray-300 cui-font-medium focus:cui-bg-gray-100 dark:focus:cui-bg-gray-900',
										'radix-disabled:cui-opacity-50',
										'focus:cui-outline-none cui-select-none'
									)}
									value={f.value}
								>
									<SelectPrimitive.ItemText>
										{f.label}
									</SelectPrimitive.ItemText>
									<SelectPrimitive.ItemIndicator className='cui-absolute cui-left-2 cui-inline-flex cui-items-center'>
										<CheckIcon />
									</SelectPrimitive.ItemIndicator>
								</SelectPrimitive.Item>
							))}
						</SelectPrimitive.Group>
					</SelectPrimitive.Viewport>
					<SelectPrimitive.ScrollDownButton className='cui-flex cui-items-center cui-justify-center cui-text-gray-700 dark:cui-text-gray-300'>
						<ChevronDownIcon />
					</SelectPrimitive.ScrollDownButton>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	)
}

export default Select

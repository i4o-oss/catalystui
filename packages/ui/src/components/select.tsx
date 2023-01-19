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
			<SelectPrimitive.Trigger asChild aria-label='Food'>
				<Button className=''>
					<SelectPrimitive.Value>
						{selected.label}
					</SelectPrimitive.Value>
					<SelectPrimitive.Icon className='ml-2'>
						<ChevronDownIcon />
					</SelectPrimitive.Icon>
				</Button>
			</SelectPrimitive.Trigger>
			<SelectPrimitive.Portal>
				<SelectPrimitive.Content>
					<SelectPrimitive.ScrollUpButton className='flex items-center justify-center text-gray-700 dark:text-gray-300'>
						<ChevronUpIcon />
					</SelectPrimitive.ScrollUpButton>
					<SelectPrimitive.Viewport className='bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg'>
						<SelectPrimitive.Group>
							{items.map((f, i) => (
								<SelectPrimitive.Item
									key={`${f.value}-${i}`}
									disabled={f?.disabled}
									className={cx(
										'relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900',
										'radix-disabled:opacity-50',
										'focus:outline-none select-none'
									)}
									value={f.value}
								>
									<SelectPrimitive.ItemText>
										{f.label}
									</SelectPrimitive.ItemText>
									<SelectPrimitive.ItemIndicator className='absolute left-2 inline-flex items-center'>
										<CheckIcon />
									</SelectPrimitive.ItemIndicator>
								</SelectPrimitive.Item>
							))}
						</SelectPrimitive.Group>
					</SelectPrimitive.Viewport>
					<SelectPrimitive.ScrollDownButton className='flex items-center justify-center text-gray-700 dark:text-gray-300'>
						<ChevronDownIcon />
					</SelectPrimitive.ScrollDownButton>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	)
}

export default Select

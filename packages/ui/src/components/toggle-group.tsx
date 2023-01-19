import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import cx from 'classnames'
import React, { FC, ReactElement } from 'react'

interface ToggleItem {
	value: string
	label: string
	icon: ReactElement
}

interface ToggleGroupProps {
	items: ToggleItem[]
	type: 'single' | 'multiple'
}

const ToggleGroup: FC<ToggleGroupProps> = ({ items, type }) => {
	return (
		<ToggleGroupPrimitive.Root type={type}>
			{items.map(({ value, label, icon }, i) => (
				<ToggleGroupPrimitive.Item
					key={`group-item-${value}-${i}`}
					value={value}
					aria-label={label}
					className={cx(
						'group radix-state-on:!bg-gray-100 dark:radix-state-on:!bg-gray-900',
						'!bg-white dark:!bg-gray-700',
						'border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x',
						'border-gray-200 radix-state-on:border-transparent dark:border-gray-600 dark:radix-state-on:border-transparent',
						'focus:relative focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75'
					)}
				>
					{icon}
				</ToggleGroupPrimitive.Item>
			))}
		</ToggleGroupPrimitive.Root>
	)
}

export default ToggleGroup

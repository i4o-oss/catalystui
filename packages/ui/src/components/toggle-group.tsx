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
	orientation?: 'vertical' | 'horizontal'
	type: 'single' | 'multiple'
}

const ToggleGroup: FC<ToggleGroupProps> = ({
	items,
	orientation = 'horizontal',
	type,
}) => {
	return (
		<ToggleGroupPrimitive.Root
			className={cx(
				'flex items-center',
				'divide-gray-200 dark:divide-gray-600 radix-state-on:divide-transparent radix-state-on:dark:divide-transparent',
				'rounded-md overflow-hidden',
				`${
					orientation === 'horizontal'
						? 'divide-x'
						: 'divide-y flex-col'
				}`
			)}
			type={type}
			data-orientation={orientation}
		>
			{items.map(({ value, label, icon }, i) => (
				<ToggleGroupPrimitive.Item
					key={`group-item-${value}-${i}`}
					value={value}
					aria-label={label}
					className={cx(
						'group radix-state-on:!bg-gray-100 dark:radix-state-on:!bg-gray-900',
						'!bg-white dark:!bg-gray-700',
						'px-2.5 py-2',
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

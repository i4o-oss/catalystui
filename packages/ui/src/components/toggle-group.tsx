import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import cx from 'classnames'
import React, { FC, ReactElement } from 'react'

interface ToggleItem {
	value: string
	label: string
	icon: ReactElement
}

interface ToggleGroupProps {
	defaultValue?: string | string[]
	items: ToggleItem[]
	onValueChange?: (value: string) => void
	orientation?: 'vertical' | 'horizontal'
	style?: 'stitched' | 'pills'
	type: 'single' | 'multiple'
}

const ToggleGroup: FC<ToggleGroupProps> = ({
	defaultValue,
	items,
	onValueChange,
	orientation = 'horizontal',
	style = 'stitched',
	type,
}) => {
	return (
		<ToggleGroupPrimitive.Root
			className={cx(
				'flex items-center',
				`${
					orientation === 'horizontal'
						? 'divide-x'
						: 'divide-y flex-col'
				}`,
				`${
					style === 'stitched'
						? 'rounded-md overflow-hidden divide-gray-200 dark:divide-gray-600 radix-state-on:divide-transparent radix-state-on:dark:divide-transparent'
						: 'gap-0.5 !divide-none'
				}`
			)}
			defaultValue={defaultValue}
			onValueChange={onValueChange}
			orientation={orientation}
			type={type}
		>
			{items.map(({ value, label, icon }, i) => (
				<ToggleGroupPrimitive.Item
					key={`group-item-${value}-${i}`}
					value={value}
					aria-label={label}
					className={cx(
						'group transition-colors duration-200',
						'hover:!bg-brand-500/50 hover:dark:!bg-brand-500/50',
						`${
							style === 'stitched'
								? '!bg-white dark:!bg-gray-700 radix-state-on:!bg-brand-500/70 dark:radix-state-on:!bg-brand-500/70'
								: 'radix-state-on:!bg-brand-500/70 dark:radix-state-on:!bg-brand-500/70 text-gray-900'
						}`,
						'p-2',
						`${style === 'pills' ? 'rounded-md' : ''}`,
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

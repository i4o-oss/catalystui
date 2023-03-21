import type { FC, ReactElement } from 'react'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import cx from 'classnames'

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
		// @ts-ignore
		<ToggleGroupPrimitive.Root
			className={cx(
				'cui-flex cui-items-center',
				`${
					orientation === 'horizontal'
						? 'cui-divide-x'
						: 'cui-divide-y cui-flex-col'
				}`,
				`${
					style === 'stitched'
						? 'cui-rounded-md cui-overflow-hidden cui-divide-gray-200 dark:cui-divide-gray-600 radix-state-on:cui-divide-transparent dark:radix-state-on:cui-divide-transparent'
						: 'cui-gap-0.5 !cui-divide-none'
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
						'cui-group cui-transition-colors cui-duration-200',
						'hover:!cui-bg-brand-500/50 hover:dark:!cui-bg-brand-500/50',
						`${
							style === 'stitched'
								? '!cui-bg-white dark:!cui-bg-gray-700 radix-state-on:!cui-bg-brand-500/70 dark:radix-state-on:!cui-bg-brand-500/70'
								: 'radix-state-on:!cui-bg-brand-500/70 dark:radix-state-on:!cui-bg-brand-500/70 cui-text-gray-900'
						}`,
						'cui-p-2',
						`${style === 'pills' ? 'cui-rounded-md' : ''}`,
						'focus:cui-relative focus:cui-outline-none focus-visible:cui-z-20 focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75'
					)}
				>
					{icon}
				</ToggleGroupPrimitive.Item>
			))}
		</ToggleGroupPrimitive.Root>
	)
}

export default ToggleGroup

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
						? 'cui-rounded-md cui-overflow-hidden cui-divide-subtle radix-state-on:cui-divide-transparent dark:radix-state-on:cui-divide-transparent'
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
						'hover:cui-bg-ui-hover',
						`${
							style === 'stitched'
								? '!cui-bg-ui radix-state-on:!cui-bg-ui-states'
								: 'radix-state-on:!cui-bg-ui-states cui-text-primary-foreground'
						}`,
						'cui-p-2',
						`${style === 'pills' ? 'cui-rounded-md' : ''}`,
						'focus:cui-relative focus:cui-outline-none focus-visible:cui-z-20 focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75'
					)}
				>
					{icon}
				</ToggleGroupPrimitive.Item>
			))}
		</ToggleGroupPrimitive.Root>
	)
}

export default ToggleGroup

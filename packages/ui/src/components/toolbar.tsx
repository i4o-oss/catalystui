import type { FC, ReactNode } from 'react'
import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import cx from 'classnames'

interface ToggleGroupItem {
	id: string
	icon: ReactNode
	onSelect: () => void
}

interface ToolbarItem {
	buttonOnSelect?: () => void
	buttonText?: string
	groupItems?: ToggleGroupItem[]
	groupType?: 'single' | 'multiple'
	link?: string
	linkText?: string
	type: 'toggle-group' | 'separator' | 'link' | 'button'
}

interface ToolbarProps {
	className?: string
	items: ToolbarItem[]
}

const Toolbar: FC<ToolbarProps> = ({ className, items }) => {
	return (
		<ToolbarPrimitive.Root
			className={`${className} h-12 flex items-center space-x-4 rounded-lg bg-white px-2.5 py-2 dark:bg-gray-800`}
		>
			{items.map(
				(
					{
						buttonOnSelect,
						buttonText,
						groupItems,
						groupType = 'multiple',
						link,
						linkText,
						type,
					},
					index
				) => {
					if (type === 'link') {
						return (
							<ToolbarPrimitive.Link
								className={cx(
									'h-full flex items-center',
									'text-sm !text-gray-500 dark:!text-gray-400',
									'focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75'
								)}
								href={link}
								key={index}
								target='_blank'
							>
								{linkText}
							</ToolbarPrimitive.Link>
						)
					} else if (type === 'button') {
						return (
							<ToolbarPrimitive.Button
								key={index}
								style={{ marginLeft: 'auto' }}
								className={cx(
									'focus-visible:ring-blend-darken inline-flex items-center justify-center',
									'rounded-md border border-transparent text-sm',
									'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-200',
									'shadow-md !bg-brand-500 hover:!bg-brand-600 dark:hover:!bg-brand-600 px-3 py-1 text-white'
								)}
							>
								{buttonText}
							</ToolbarPrimitive.Button>
						)
					} else if (type === 'separator') {
						return (
							<ToolbarPrimitive.Separator
								className='h-full mx-4 my-0.5 hidden w-px dark:bg-gray-600 xl:flex'
								key={index}
							/>
						)
					} else {
						return (
							<ToolbarPrimitive.ToggleGroup
								key={index}
								type={groupType}
							>
								{groupItems?.map(
									({ id, icon, onSelect }, index) => (
										<ToolbarPrimitive.ToggleItem
											key={index}
											value={id}
											className={cx(
												'group radix-state-on:!bg-gray-100 dark:radix-state-on:!bg-gray-900',
												'border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x',
												'border-gray-200 radix-state-on:border-transparent dark:border-gray-600 dark:radix-state-on:border-transparent',
												'focus:relative focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75'
											)}
										>
											{icon}
										</ToolbarPrimitive.ToggleItem>
									)
								)}
							</ToolbarPrimitive.ToggleGroup>
						)
					}
				}
			)}
		</ToolbarPrimitive.Root>
	)
}

export default Toolbar

import type { FC, ReactNode } from 'react'
import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import cx from 'classnames'
import { PrimaryButton } from './buttons'

interface ToggleGroupItem {
	id: string
	icon: ReactNode
	onSelect: () => void
}

interface ToolbarItem {
	buttonOnSelect?: () => void
	buttonText?: ReactNode | string
	groupItems?: ToggleGroupItem[]
	groupType?: 'single' | 'multiple'
	link?: string
	linkText?: ReactNode | string
	type: 'toggle-group' | 'separator' | 'link' | 'button'
}

interface ToolbarProps {
	className?: string
	items: ToolbarItem[]
}

const Toolbar: FC<ToolbarProps> = ({ className, items }) => {
	return (
		<ToolbarPrimitive.Root
			className={`${className} cui-h-12 cui-flex cui-items-center cui-rounded-lg cui-bg-primary-subtle cui-px-2.5 cui-py-2`}
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
									'cui-h-full cui-flex cui-items-center',
									'cui-text-sm !cui-text-foreground',
									'focus:cui-outline-none focus-visible:cui-z-20 focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75'
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
							<ToolbarPrimitive.Button key={index} asChild>
								<PrimaryButton
									className='cui-py-1 cui-mx-2'
									onClick={buttonOnSelect}
								>
									{buttonText}
								</PrimaryButton>
							</ToolbarPrimitive.Button>
						)
					} else if (type === 'separator') {
						return (
							<ToolbarPrimitive.Separator
								className='cui-h-full cui-mx-2 cui-my-0.5 cui-hidden cui-w-px cui-bg-subtle xl:cui-flex'
								key={index}
							/>
						)
					} else {
						return (
							<ToolbarPrimitive.ToggleGroup
								className='cui-flex cui-rounded-md cui-overflow-hidden cui-divide-x cui-divide-subtle radix-state-on:cui-divide-transparent dark:radix-state-on:cui-divide-transparent'
								key={index}
								type={groupType}
							>
								{groupItems?.map(
									({ id, icon, onSelect }, index) => (
										<ToolbarPrimitive.ToggleItem
											key={index}
											value={id}
											asChild
										>
											<button
												className={cx(
													'cui-group cui-transition-colors cui-duration-200',
													'hover:cui-bg-ui-hover',
													'!cui-bg-ui radix-state-on:!cui-bg-ui-states',
													'cui-p-2',
													'focus:cui-relative focus:cui-outline-none focus-visible:cui-z-20 focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75'
												)}
												// className={cx(
												// 	'cui-group radix-state-on:!cui-bg-gray-100 dark:radix-state-on:!cui-bg-gray-900',
												// 	'cui-border-y cui-px-2.5 cui-py-2 first:cui-rounded-l-md first:cui-border-x last:cui-rounded-r-md last:cui-border-x',
												// 	'cui-border-gray-200 radix-state-on:cui-border-transparent dark:cui-border-gray-600 dark:radix-state-on:cui-border-transparent',
												// 	'focus:cui-relative focus:cui-outline-none focus-visible:cui-z-20 focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75'
												// )}
												onClick={onSelect}
											>
												{icon}
											</button>
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

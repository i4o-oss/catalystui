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
			className={`${className} cui-h-12 cui-flex cui-items-center cui-space-x-4 cui-rounded-lg cui-bg-white cui-px-2.5 cui-py-2 dark:cui-bg-gray-800`}
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
									'cui-text-sm !cui-text-gray-500 dark:!cui-text-gray-400',
									'focus:cui-outline-none focus-visible:cui-z-20 focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75'
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
								<button
									style={{ marginLeft: 'auto' }}
									className={cx(
										'focus-visible:cui-ring-blend-darken cui-inline-flex cui-items-center cui-justify-center',
										'cui-rounded-md cui-border cui-border-transparent cui-text-sm',
										'focus:cui-outline-none focus-visible:cui-ring-2 focus-visible:cui-ring-offset-2 cui-transition-all cui-duration-200',
										'cui-shadow-md !cui-bg-brand-500 hover:!cui-bg-brand-600 dark:hover:!cui-bg-brand-600 cui-px-3 cui-py-1 cui-text-white'
									)}
									onClick={buttonOnSelect}
								>
									{buttonText}
								</button>
							</ToolbarPrimitive.Button>
						)
					} else if (type === 'separator') {
						return (
							<ToolbarPrimitive.Separator
								className='cui-h-full cui-mx-4 cui-my-0.5 cui-hidden cui-w-px dark:cui-bg-gray-600 xl:cui-flex'
								key={index}
							/>
						)
					} else {
						return (
							<ToolbarPrimitive.ToggleGroup
								className='cui-flex'
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
													'cui-group radix-state-on:!cui-bg-gray-100 dark:radix-state-on:!cui-bg-gray-900',
													'cui-border-y cui-px-2.5 cui-py-2 first:cui-rounded-l-md first:cui-border-x last:cui-rounded-r-md last:cui-border-x',
													'cui-border-gray-200 radix-state-on:cui-border-transparent dark:cui-border-gray-600 dark:radix-state-on:cui-border-transparent',
													'focus:cui-relative focus:cui-outline-none focus-visible:cui-z-20 focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75'
												)}
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

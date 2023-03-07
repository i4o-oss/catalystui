import type { FC, ReactNode } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import cx from 'classnames'
import { ChevronRightIcon } from '@radix-ui/react-icons'

interface DropdownMenuItem {
	icon?: ReactNode
	label?: string | ReactNode
	link?: string
	onSelect?: (e: Event) => void
	shortcut?: string
	type: 'item' | 'separator' | 'submenu'
	submenu?: DropdownMenuItem[]
}

interface DropdownMenuProps {
	align?: 'end' | 'start' | 'center' | undefined
	items: DropdownMenuItem[]
	sideOffset?: number
	trigger: ReactNode
}

const DropdownMenu: FC<DropdownMenuProps> = ({
	align = 'end',
	items,
	sideOffset = 5,
	trigger,
}) => {
	return (
		<div className='relative inline-flex text-left [&_div["data-radix-popper-content-wrapper"]]:!z-100'>
			<DropdownMenuPrimitive.Root>
				<DropdownMenuPrimitive.Trigger>
					{trigger}
				</DropdownMenuPrimitive.Trigger>
				<DropdownMenuPrimitive.Portal>
					<DropdownMenuPrimitive.Content
						align={align}
						asChild={true}
						className={cx(
							' radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
							'w-48 rounded-lg p-1 shadow-md md:w-56',
							'bg-white dark:bg-gray-800'
						)}
						sideOffset={sideOffset}
					>
						<div>
							{items.map(
								(
									{
										label,
										link,
										icon,
										onSelect,
										shortcut,
										type,
										submenu,
									},
									i
								) => {
									if (type === 'separator') {
										return (
											<DropdownMenuPrimitive.Separator
												key={i}
												className='my-1 h-px bg-gray-200 dark:bg-gray-700'
											/>
										)
									} else if (type === 'submenu') {
										return (
											<DropdownMenuPrimitive.Sub key={i}>
												<DropdownMenuPrimitive.SubTrigger
													className={cx(
														'flex cursor-pointer select-none items-center space-x-2 rounded-md px-2 py-2 outline-none',
														'text-gray-600 focus:bg-gray-50 dark:text-gray-400 dark:focus:bg-gray-900'
													)}
												>
													<div className='basis-4'>
														{icon}
													</div>
													<span className='text-sm font-normal flex-1'>
														{label}
													</span>
													<ChevronRightIcon className='w-4 h-4' />
												</DropdownMenuPrimitive.SubTrigger>
												<DropdownMenuPrimitive.SubContent
													className={cx(
														' radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
														'w-48 rounded-lg px-1.5 py-1 shadow-lg md:w-56',
														'bg-white dark:bg-gray-800'
													)}
													sideOffset={sideOffset}
													alignOffset={-5}
												>
													{submenu?.map(
														(
															{
																label,
																link,
																icon,
																onSelect,
																shortcut,
																type,
															},
															j
														) => {
															if (
																type ===
																'separator'
															) {
																return (
																	<DropdownMenuPrimitive.Separator
																		key={`${i}-${j}`}
																		className='my-1 h-px bg-gray-200 dark:bg-gray-700'
																	/>
																)
															} else {
																return link ? (
																	<a
																		key={`${i}-${j}`}
																		href={
																			link
																		}
																	>
																		<DropdownMenuPrimitive.Item
																			key={
																				i
																			}
																			className={cx(
																				'flex cursor-pointer select-none items-center space-x-2 rounded-md px-2 py-2 outline-none',
																				'text-gray-600 focus:bg-gray-50 dark:text-gray-400 dark:focus:bg-gray-900'
																			)}
																			onSelect={
																				onSelect
																			}
																		>
																			<div className='basis-4'>
																				{
																					icon
																				}
																			</div>
																			<span className='text-sm font-normal flex-1'>
																				{
																					label
																				}
																			</span>
																			{shortcut && (
																				<div className='text-xs font-normal text-gray-400 dark:text-gray-600'>
																					{
																						shortcut
																					}
																				</div>
																			)}
																		</DropdownMenuPrimitive.Item>
																	</a>
																) : (
																	<DropdownMenuPrimitive.Item
																		key={`${i}-${j}`}
																		className={cx(
																			'flex cursor-pointer select-none items-center space-x-2 rounded-md px-2 py-2 outline-none',
																			'text-gray-600 focus:bg-gray-50 dark:text-gray-400 dark:focus:bg-gray-900'
																		)}
																		onSelect={
																			onSelect
																		}
																	>
																		<div className='basis-4'>
																			{
																				icon
																			}
																		</div>
																		<span className='text-sm font-normal flex-1'>
																			{
																				label
																			}
																		</span>
																		{shortcut && (
																			<div className='text-xs font-normal text-gray-400 dark:text-gray-600'>
																				{
																					shortcut
																				}
																			</div>
																		)}
																	</DropdownMenuPrimitive.Item>
																)
															}
														}
													)}
												</DropdownMenuPrimitive.SubContent>
											</DropdownMenuPrimitive.Sub>
										)
									} else {
										return link ? (
											<a
												key={i}
												href={link}
												target='_blank'
												rel='noopener noreferrer'
											>
												<DropdownMenuPrimitive.Item
													key={i}
													className={cx(
														'flex cursor-pointer select-none items-center space-x-2 rounded-md px-2 py-2 outline-none',
														'text-gray-600 focus:bg-gray-50 dark:text-gray-400 dark:focus:bg-gray-900'
													)}
													onSelect={onSelect}
												>
													<div className='basis-4'>
														{icon}
													</div>
													<span className='text-sm font-normal flex-1'>
														{label}
													</span>
													{shortcut && (
														<div className='text-xs font-normal text-gray-400 dark:text-gray-600'>
															{shortcut}
														</div>
													)}
												</DropdownMenuPrimitive.Item>
											</a>
										) : (
											<DropdownMenuPrimitive.Item
												key={i}
												className={cx(
													'flex cursor-pointer select-none items-center space-x-2 rounded-md px-2 py-2 outline-none',
													'text-gray-600 focus:bg-gray-50 dark:text-gray-400 dark:focus:bg-gray-900'
												)}
												onSelect={onSelect}
											>
												<div className='basis-4'>
													{icon}
												</div>
												<span className='text-sm font-normal flex-1'>
													{label}
												</span>
												{shortcut && (
													<div className='text-xs font-normal text-gray-400 dark:text-gray-600'>
														{shortcut}
													</div>
												)}
											</DropdownMenuPrimitive.Item>
										)
									}
								}
							)}
						</div>
					</DropdownMenuPrimitive.Content>
				</DropdownMenuPrimitive.Portal>
			</DropdownMenuPrimitive.Root>
		</div>
	)
}

export default DropdownMenu

import type { FC, ReactNode } from 'react'
import { Link } from '@remix-run/react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import cx from 'classnames'

interface DropdownMenuItemType {
	icon?: ReactNode
	label: string | ReactNode
	link?: string
	onSelect?: (e: Event) => void
	shortcut?: string
}

interface DropdownMenuProps {
	align?: 'end' | 'start' | 'center' | undefined
	items: DropdownMenuItemType[]
	secondaryItems?: DropdownMenuItemType[]
	sideOffset?: number
	trigger: ReactNode
}

const DropdownMenu: FC<DropdownMenuProps> = ({
	align = 'end',
	items,
	secondaryItems,
	sideOffset = 5,
	trigger,
}) => {
	return (
		<div className='relative inline-flex text-left'>
			<DropdownMenuPrimitive.Root>
				<DropdownMenuPrimitive.Trigger>
					{trigger}
				</DropdownMenuPrimitive.Trigger>
				<DropdownMenuPrimitive.Content
					align={align}
					className={cx(
						' radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
						'w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56',
						'bg-white dark:bg-gray-800'
					)}
					sideOffset={sideOffset}
				>
					{items.map(
						({ label, link, icon, onSelect, shortcut }, i) => {
							return link ? (
								<Link key={i} to={link}>
									<DropdownMenuPrimitive.Item
										key={i}
										className={cx(
											'flex cursor-pointer select-none items-center space-x-2 rounded-md px-2 py-2 text-sm outline-none',
											'text-gray-600 focus:bg-gray-50 dark:text-gray-400 dark:focus:bg-gray-900'
										)}
										onSelect={onSelect}
									>
										{icon && (
											<div className='flex-shrink-0'>
												{icon}
											</div>
										)}
										<div className='flex-1'>{label}</div>
										{shortcut && (
											<div className='text-sm text-gray-600 dark:text-gray-400'>
												{shortcut}
											</div>
										)}
									</DropdownMenuPrimitive.Item>
								</Link>
							) : (
								<DropdownMenuPrimitive.Item
									key={i}
									className={cx(
										'flex cursor-pointer select-none items-center space-x-2 rounded-md px-2 py-2 text-sm outline-none',
										'text-gray-600 focus:bg-gray-50 dark:text-gray-400 dark:focus:bg-gray-900'
									)}
									onSelect={onSelect}
								>
									{icon && (
										<div className='flex-shrink-0'>
											{icon}
										</div>
									)}
									<div className='flex-1'>{label}</div>
									{shortcut && (
										<div className='text-sm text-gray-600 dark:text-gray-400'>
											{shortcut}
										</div>
									)}
								</DropdownMenuPrimitive.Item>
							)
						}
					)}
					{secondaryItems && (
						<DropdownMenuPrimitive.Separator className='my-1 h-px bg-gray-200 dark:bg-gray-700' />
					)}
					{secondaryItems?.map(
						({ label, link, icon, onSelect, shortcut }, i) => {
							return link ? (
								<Link key={i} to={link}>
									<DropdownMenuPrimitive.Item
										key={i}
										className={cx(
											'flex cursor-pointer select-none items-center space-x-2 rounded-md px-2 py-2 text-sm outline-none',
											'text-gray-600 focus:bg-gray-50 dark:text-gray-400 dark:focus:bg-gray-900'
										)}
										onSelect={onSelect}
									>
										{icon && (
											<div className='flex-shrink-0'>
												{icon}
											</div>
										)}
										<div className='flex-1'>{label}</div>
										{shortcut && (
											<div className='text-sm text-gray-600 dark:text-gray-400'>
												{shortcut}
											</div>
										)}
									</DropdownMenuPrimitive.Item>
								</Link>
							) : (
								<DropdownMenuPrimitive.Item
									key={i}
									className={cx(
										'flex cursor-pointer select-none items-center space-x-2 rounded-md px-2 py-2 text-sm outline-none',
										'text-gray-600 focus:bg-gray-50 dark:text-gray-400 dark:focus:bg-gray-900'
									)}
									onSelect={onSelect}
								>
									{icon && (
										<div className='flex-shrink-0'>
											{icon}
										</div>
									)}
									<div className='flex-1'>{label}</div>
									{shortcut && (
										<div className='text-sm text-gray-600 dark:text-gray-400'>
											{shortcut}
										</div>
									)}
								</DropdownMenuPrimitive.Item>
							)
						}
					)}
				</DropdownMenuPrimitive.Content>
			</DropdownMenuPrimitive.Root>
		</div>
	)
}

export default DropdownMenu

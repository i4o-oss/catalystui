import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import cx from 'classnames'
import type { FC, ReactNode } from 'react'
import { useEffect, useState } from 'react'

// enum NavMenuType {
// 	TABS = 'tabs',
// 	PILLS = 'pills',
// 	GROUP = 'group',
// }

interface NavItem {
	content?: string | ReactNode
	href?: string
	label: string | ReactNode
	id: string
}

export enum NavType {
	ROW,
	COLUMN,
}

interface Props {
	items: NavItem[]
	type?: 'row' | 'column'
}

const Nav: FC<Props> = ({ items, type = NavType.ROW }) => {
	const [pathname, setPathname] = useState('')

	useEffect(() => {
		setPathname(window?.location?.pathname)
	}, [])

	return (
		<NavigationMenuPrimitive.Root className='relative'>
			<NavigationMenuPrimitive.List
				className={`flex ${
					type === 'column'
						? 'flex-col space-y-2'
						: 'flex-row space-x-4'
				}`}
			>
				{items.map(({ content, href, label, id }) => {
					if (content) {
						return (
							<NavigationMenuPrimitive.Item
								key={`nav-item-${id}`}
							>
								<NavigationMenuPrimitive.Trigger
									className={cx(
										'px-4 py-2 text-sm rounded-md hover:bg-brand-100 dark:hover:bg-brand-800',
										'text-sm font-medium',
										'text-brand-700 dark:text-brand-100',
										'focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75'
									)}
								>
									{label}
								</NavigationMenuPrimitive.Trigger>
								<NavigationMenuPrimitive.Content
									className={cx(
										'absolute w-auto top-0 left-0 rounded-lg',
										'radix-motion-from-start:animate-enter-from-left',
										'radix-motion-from-end:animate-enter-from-right',
										'radix-motion-to-start:animate-exit-to-left',
										'radix-motion-to-end:animate-exit-to-right'
									)}
								>
									{content}
								</NavigationMenuPrimitive.Content>
							</NavigationMenuPrimitive.Item>
						)
					}

					return (
						<NavigationMenuPrimitive.Item
							asChild
							key={`nav-item-${id}`}
						>
							<a
								href={href as string}
								className={cx(
									'px-4 py-2 text-sm rounded-md hover:bg-brand-100 dark:hover:bg-brand-800',
									'text-sm text-gray-700 dark:text-gray-100',
									`${
										pathname.includes(href as string)
											? 'bg-brand dark:bg-brand font-semibold'
											: 'font-medium'
									}`
								)}
							>
								{label}
							</a>
						</NavigationMenuPrimitive.Item>
					)
				})}

				<NavigationMenuPrimitive.Indicator
					className={cx(
						'z-10',
						'top-[100%] flex items-end justify-center h-2 overflow-hidden',
						'radix-state-visible:animate-fade-in',
						'radix-state-hidden:animate-fade-out',
						'transition-[width_transform] duration-[250ms] ease-[ease]'
					)}
				>
					<div className='top-1 relative bg-white dark:bg-gray-800 w-2 h-2 rotate-45' />
				</NavigationMenuPrimitive.Indicator>
			</NavigationMenuPrimitive.List>

			<div
				className={cx(
					'absolute flex justify-center',
					'w-[140%] left-[-20%] top-[100%]'
				)}
				style={{
					perspective: '2000px',
				}}
			>
				<NavigationMenuPrimitive.Viewport
					className={cx(
						'relative mt-2 shadow-lg rounded-md bg-white dark:bg-gray-800 overflow-hidden',
						'w-radix-navigation-menu-viewport',
						'h-radix-navigation-menu-viewport',
						'radix-state-open:animate-scale-in-content',
						'radix-state-closed:animate-scale-out-content',
						'origin-[top_center] transition-[width_height] duration-300 ease-[ease]'
					)}
				/>
			</div>
		</NavigationMenuPrimitive.Root>
	)
}

export default Nav
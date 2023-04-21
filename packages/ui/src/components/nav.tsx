import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import cx from 'classnames'
import type { FC, ReactNode } from 'react'
import { useEffect, useState } from 'react'

interface NavItem {
	content?: string | ReactNode
	href?: string
	label: string | ReactNode
	id: string
}

interface Props {
	items: NavItem[]
	type?: 'row' | 'column'
	Link?: React.ElementType
}

const Nav: FC<Props> = ({ items, type = 'row', Link }) => {
	const [pathname, setPathname] = useState('')

	useEffect(() => {
		setPathname(window?.location?.pathname)
	}, [])

	return (
		<NavigationMenuPrimitive.Root className='relative'>
			<NavigationMenuPrimitive.List
				className={`cui-flex cui-rounded-lg cui-bg-ui cui-p-2 ${
					type === 'column'
						? 'cui-flex-col cui-space-y-2'
						: 'cui-flex-row cui-space-x-2'
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
										'cui-px-4 cui-py-1 cui-text-sm',
										'cui-text-sm cui-font-medium',
										'cui-text-gray-700 dark:cui-text-gray-100',
										'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75'
									)}
								>
									{label}
								</NavigationMenuPrimitive.Trigger>
								<NavigationMenuPrimitive.Content
									className={cx(
										'cui-absolute cui-w-auto cui-top-0 cui-left-0 cui-rounded-lg !cui-z-100',
										'cui-bg-white dark:cui-bg-gray-800',
										'radix-motion-from-start:cui-animate-enter-from-left',
										'radix-motion-from-end:cui-animate-enter-from-right',
										'radix-motion-to-start:cui-animate-exit-to-left',
										'radix-motion-to-end:cui-animate-exit-to-right'
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
							{Link ? (
								<Link
									to={href as string}
									className={cx(
										'cui-px-4 cui-py-1 cui-text-sm',
										'cui-text-sm cui-text-gray-700 dark:cui-text-gray-100',
										`${
											pathname.includes(href as string)
												? 'cui-bg-transparent cui-text-brand dark:cui-text-brand cui-font-semibold'
												: 'cui-font-medium'
										}`
									)}
								>
									{label}
								</Link>
							) : (
								<a
									href={href as string}
									className={cx(
										'cui-px-4 cui-py-1 cui-text-sm',
										'cui-text-sm cui-text-gray-700 dark:cui-text-gray-100',
										`${
											pathname.includes(href as string)
												? 'cui-bg-transparent cui-text-brand dark:cui-text-brand cui-font-semibold'
												: 'cui-font-medium'
										}`
									)}
								>
									{label}
								</a>
							)}
						</NavigationMenuPrimitive.Item>
					)
				})}

				<NavigationMenuPrimitive.Indicator
					className={cx(
						'!cui-z-100',
						'cui-top-[100%] cui-flex cui-items-end cui-justify-center cui-h-2 cui-overflow-hidden',
						'radix-state-visible:cui-animate-fade-in',
						'radix-state-hidden:cui-animate-fade-out',
						'cui-transition-[width_transform] cui-duration-[250ms] cui-ease-[ease]'
					)}
				>
					<div className='cui-top-1 cui-relative cui-bg-white dark:cui-bg-gray-800 cui-w-2 cui-h-2 cui-rotate-45' />
				</NavigationMenuPrimitive.Indicator>
			</NavigationMenuPrimitive.List>

			<div
				className={cx(
					'cui-absolute cui-flex cui-justify-center',
					'cui-w-[140%] cui-left-[-20%] cui-top-[100%] !cui-z-100'
				)}
				style={{
					perspective: '2000px',
				}}
			>
				<NavigationMenuPrimitive.Viewport
					className={cx(
						'cui-relative cui-mt-2 cui-shadow-lg cui-rounded-md cui-bg-white dark:cui-bg-gray-800 cui-overflow-hidden',
						'cui-w-radix-navigation-menu-viewport',
						'cui-h-radix-navigation-menu-viewport',
						'radix-state-open:cui-animate-scale-in-content',
						'radix-state-closed:cui-animate-scale-out-content',
						'cui-origin-[top_center] cui-transition-[width_height] cui-duration-300 cui-ease-[ease]'
					)}
				/>
			</div>
		</NavigationMenuPrimitive.Root>
	)
}

export default Nav

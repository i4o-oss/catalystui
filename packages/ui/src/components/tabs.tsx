import type { FC, ReactNode } from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import cx from 'classnames'

const TabsRoot = TabsPrimitive.Root
const TabsList = TabsPrimitive.List
const TabsTrigger = TabsPrimitive.Trigger
const TabsContent = TabsPrimitive.Content

interface Tab {
	content: string | ReactNode
	id: string
	title: string | ReactNode
}

// TODO: Add support for onchange, orientation, etc.
// TODO: Update styles so they're consistent with the rest of the components
interface Props {
	defaultValue: string
	tabs: Tab[]
	type: 'row' | 'column'
}

const Tabs: FC<Props> = ({ defaultValue, tabs, type = 'row' }) => {
	return (
		<TabsRoot
			className={`min-w-[24rem] grid gap-4 ${
				type === 'row' ? 'grid-cols-1' : 'grid-cols-3'
			}`}
			defaultValue={defaultValue}
		>
			<TabsList
				className={cx(
					'flex w-full gap-4',
					`${type === 'column' ? 'flex-col' : ''}`
				)}
			>
				{tabs.map(({ title, id }) => (
					<TabsTrigger
						key={`tab-trigger-${id}`}
						value={id}
						className={cx(
							'group',
							'rounded-lg',
							'radix-state-inactive:bg-gray-50 dark:radix-state-active:bg-gray-900 dark:radix-state-inactive:bg-gray-800',
							'px-8 py-2',
							'focus:radix-state-active:border-b-red',
							'focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75'
						)}
					>
						<span
							className={cx(
								'text-sm font-medium',
								'text-gray-700 dark:text-gray-100'
							)}
						>
							{title}
						</span>
					</TabsTrigger>
				))}
			</TabsList>
			{tabs.map(({ content, id }) => (
				<TabsContent
					key={`tab-content-${id}`}
					value={id}
					className={cx(
						'col-span-2 rounded-lg bg-white px-6 py-4 dark:bg-gray-800'
					)}
				>
					{content}
				</TabsContent>
			))}
		</TabsRoot>
	)
}

export default Tabs

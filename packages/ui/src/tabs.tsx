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

interface Props {
	tabs: Tab[]
}

const Tabs: FC<Props> = ({ tabs }) => {
	return (
		<TabsRoot defaultValue='tab1'>
			<TabsList
				className={cx(
					'flex w-full rounded-t-lg bg-white dark:bg-gray-800'
				)}
			>
				{tabs.map(({ title, id }) => (
					<TabsTrigger
						key={`tab-trigger-${id}`}
						value={id}
						className={cx(
							'group',
							'first:rounded-tl-lg last:rounded-tr-lg',
							'border-b first:border-r last:border-l',
							'border-gray-300 dark:border-gray-600',
							'radix-state-active:border-b-gray-700 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-gray-50 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-900 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-gray-800',
							'flex-1 px-3 py-2.5',
							'focus:radix-state-active:border-b-red',
							'focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
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
						'rounded-b-lg bg-white px-6 py-4 dark:bg-gray-800'
					)}
				>
					{content}
				</TabsContent>
			))}
		</TabsRoot>
	)
}

export default Tabs

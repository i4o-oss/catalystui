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
			className={`cui-min-w-[24rem] cui-grid cui-gap-4 ${
				type === 'row' ? 'cui-grid-cols-1' : 'cui-grid-cols-3'
			}`}
			defaultValue={defaultValue}
		>
			<TabsList
				className={cx(
					'cui-col-span-1 cui-flex cui-gap-4',
					`${type === 'column' ? 'cui-flex-col' : ''}`
				)}
			>
				{tabs.map(({ title, id }) => (
					<TabsTrigger
						key={`tab-trigger-${id}`}
						value={id}
						className={cx(
							'cui-group',
							'cui-rounded-lg',
							'radix-state-inactive:cui-bg-gray-50 dark:radix-state-active:cui-bg-gray-900 dark:radix-state-inactive:cui-bg-gray-800',
							`${
								type === 'row'
									? 'cui-px-8 cui-py-2'
									: 'cui-px-4 cui-py-2'
							}`,
							'focus:cui-z-10 focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75'
						)}
					>
						<span
							className={cx(
								'cui-text-sm cui-font-medium',
								'cui-text-gray-700 dark:cui-text-gray-100'
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
						'cui-col-span-2 cui-rounded-lg cui-bg-white dark:cui-bg-gray-800',
						'focus:cui-outline-none'
					)}
				>
					{content}
				</TabsContent>
			))}
		</TabsRoot>
	)
}

export default Tabs

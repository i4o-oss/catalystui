import type { ReactNode } from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import cx from 'classnames'
import React from 'react'

interface TabContent {
	content: string | ReactNode
	id: string
	title: string | ReactNode
}

// TODO: Add support for onchange, orientation, etc.
// TODO: Update styles so they're consistent with the rest of the components
interface TabsProps {
	defaultValue: string
	type: 'row' | 'column'
}

interface TabsData {
	tabs: TabContent[]
	type: 'row' | 'column'
}

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<TabsData, any>(
	({ className, ...props }, ref) => (
		<TabsPrimitive.List
			className={cx(
				'cui-col-span-1 cui-flex cui-gap-2',
				`${props.type === 'column' ? 'cui-flex-col' : ''}`
			)}
			// @ts-ignore
			ref={ref}
		>
			{props.tabs.map(
				({ title, id }: { title: string | ReactNode; id: string }) => (
					<TabsPrimitive.Trigger
						key={`tab-trigger-${id}`}
						value={id}
						className={cx(
							'cui-group',
							'cui-rounded-lg',
							'radix-state-inactive:cui-bg-transparent radix-state-active:cui-bg-ui-states',
							'radix-state-inactive:cui-text-foreground-subtle radix-state-active:cui-text-foreground',
							`${
								props.type === 'row'
									? 'cui-px-8 cui-py-2'
									: 'cui-px-4 cui-py-2'
							}`,
							'focus:cui-z-10 focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75'
						)}
					>
						<span className={cx('cui-text-sm cui-font-medium')}>
							{title}
						</span>
					</TabsPrimitive.Trigger>
				)
			)}
		</TabsPrimitive.List>
	)
)
TabsList.displayName = TabsPrimitive.List.displayName

const TabsContent = React.forwardRef<TabsData, any>(
	({ className, ...props }, ref) => (
		<>
			{props.tabs.map(
				({
					content,
					id,
				}: {
					content: string | ReactNode
					id: string
				}) => (
					<TabsPrimitive.Content
						key={`tab-content-${id}`}
						value={id}
						className={cx(
							'cui-col-span-2 cui-rounded-lg',
							'focus:cui-outline-none'
						)}
						// @ts-ignore
						ref={ref}
					>
						{content}
					</TabsPrimitive.Content>
				)
			)}
		</>
	)
)
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList }

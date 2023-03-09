import type { ReactNode } from 'react'

type DemoCardProps = {
	children: ReactNode
	className?: string
}

export default function DemoCard(props: DemoCardProps) {
	return (
		<div
			className={`${props.className} w-full border border-gray-200 dark:border-gray-800 px-8 py-16 flex items-center justify-center rounded-lg my-4 bg-gradient-to-l from-orange-500 to-yellow-300 gap-4`}
		>
			{props.children}
		</div>
	)
}

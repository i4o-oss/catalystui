import type { ReactNode } from 'react'
import Link from 'next/link'

type ComponentLinkProps = {
	children: ReactNode
	className?: string
	href: string
}

export default function ComponentLink(props: ComponentLinkProps) {
	return (
		<Link href={props.href}>
			<div
				className={`${props.className} w-full border border-gray-200 dark:border-gray-800 px-8 py-16 flex items-center justify-center rounded-lg !text-white`}
			>
				{props.children}
			</div>
		</Link>
	)
}

type DemoCardProps = {
	children: React.ReactNode
}

export default function DemoCard(props: DemoCardProps) {
	return (
		<div className='w-full border border-gray-200 dark:border-gray-800 px-8 py-16 flex items-center justify-center rounded-lg my-4'>
			{props.children}
		</div>
	)
}

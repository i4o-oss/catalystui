import { getPagesUnderRoute } from 'nextra/context'
import Link from 'next/link'

export default function BlogIndex({ more = 'Read more' }) {
	return getPagesUnderRoute('/blog').map((page) => {
		return (
			<div className='flex flex-col items-start justify-start'>
				<h3 className='text-2xl font-semibold mt-8'>
					<Link
						className='!text-gray-900 dark:!text-white'
						href={page.route}
					>
						{page.meta?.title ||
							page?.frontMatter?.title ||
							page?.name}
					</Link>
				</h3>
				<p className='opacity-80 mt-6'>
					{page?.frontMatter?.description}{' '}
					<Link href={page.route}>{more + ' →'}</Link>
				</p>
				{page?.frontMatter?.date ? (
					<p className='opacity-50 text-sm mt-6'>
						{page?.frontMatter.date}
					</p>
				) : null}
			</div>
		)
	})
}

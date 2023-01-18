import { getPagesUnderRoute } from 'nextra/context'
import type { Page } from 'nextra'
import Link from 'next/link'

export default function BlogIndex({ more = 'Read more' }) {
	const pages: Page[] = getPagesUnderRoute('/blog')
	return pages.map((page, index) => {
		// @ts-ignore
		const frontMatter = page?.frontMatter
		return (
			<div
				className='flex flex-col items-start justify-start mt-4'
				key={index}
			>
				<h3 className='text-2xl font-semibold mt-8'>
					<Link
						className='!text-gray-900 dark:!text-white'
						href={page.route}
					>
						{page.meta?.title || frontMatter?.title || page?.name}
					</Link>
				</h3>
				<p className='opacity-80 mt-6 leading-loose'>
					{frontMatter?.description}{' '}
					<Link href={page.route}>{more + ' →'}</Link>
				</p>
				{frontMatter?.date ? (
					<p className='opacity-50 text-sm mt-6'>
						{frontMatter.date}
					</p>
				) : null}
			</div>
		)
	})
}

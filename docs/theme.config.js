import Image from 'next/image'

const theme = {
	logo: (
		<span className='flex items-center space-x-2'>
			<Image
				src='/assets/logo.png'
				alt='CatalystUI Logo'
				width={40}
				height={40}
				priority
			/>
			<span className='text-base font-semibold'>Catalyst UI</span>
		</span>
	),
	project: {
		link: 'https://github.com/i4o-oss/catalystui',
		newWindow: true,
	},
	head: ({ title }) => {
		return (
			<>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/assets/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/assets/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/assets/favicon-16x16.png'
				/>
				<link rel='manifest' href='/assets/site.webmanifest' />
				<link
					rel='mask-icon'
					href='/assets/safari-pinned-tab.svg'
					color='#5bbad5'
				/>
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
				<title>
					{title
						? `${title} - Catalyst UI`
						: 'Styled Radix UI components and utilities — Catalyst UI'}
				</title>
			</>
		)
	},
	gitTimestamp: null,
	sidebar: {
		titleComponent({ title }) {
			if (
				title === 'Aspect Ratio' ||
				title === 'Collapsible' ||
				title === 'Hover Card' ||
				title === 'Progress'
			) {
				return (
					<div className='flex items-center gap-x-2'>
						{title}
						<span className='text-xs px-1.5 py-0.5 rounded-md bg-brand-500 text-white'>
							New
						</span>
					</div>
				)
			}

			return title
		},
	},
	// footer: {
	// 	component: (
	// 		<div className='w-screen h-20 sticky top-0 z-50 flex flex-wrap items-center justify-center px-4 sm:px-6 lg:px-8 py-4 border-t border-gray-200'>
	// 			<div className='w-[88rem] flex items-center justify-between'>
	// 				<p className='flex items-center text-gray-400 gap-2'>
	// 					<svg
	// 						xmlns='http://www.w3.org/2000/svg'
	// 						width='24'
	// 						height='24'
	// 						viewBox='0 0 24 24'
	// 						fill='none'
	// 						stroke='currentColor'
	// 						stroke-width='2'
	// 						stroke-linecap='round'
	// 						stroke-linejoin='round'
	// 					>
	// 						<path d='m7 11 2-2-2-2'></path>
	// 						<path d='M11 13h4'></path>
	// 						<rect
	// 							x='3'
	// 							y='3'
	// 							width='18'
	// 							height='18'
	// 							rx='2'
	// 							ry='2'
	// 						></rect>
	// 					</svg>
	// 					<p className=''>
	// 						Built by{' '}
	// 						<a
	// 							className='underline'
	// 							href='https://i4o.dev'
	// 							target='_blank'
	// 							rel='noreferrer noopener'
	// 						>
	// 							i4o
	// 						</a>
	// 						.
	// 					</p>
	// 				</p>
	// 				<div className='flex items-center justify-end'>
	// 					<p>
	// 						The source code is available on{' '}
	// 						<a
	// 							aria-label='Github Repo'
	// 							href='https://github.com/i4o-oss/catalystui'
	// 							target='_blank'
	// 							rel='noreferrer noopener'
	// 						>
	// 							Github
	// 						</a>
	// 					</p>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	),
	// },
}
export default theme

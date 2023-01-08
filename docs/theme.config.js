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
}
export default theme

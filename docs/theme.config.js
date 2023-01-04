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
	},
}
export default theme

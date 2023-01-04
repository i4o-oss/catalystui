import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { PrimaryButton } from '@i4o-oss/catalystui'

export default function Home() {
	return (
		<>
			<Head>
				<title>Catalyst UI: Styled RadixUI Primitives</title>
				<meta
					name='description'
					content='Catalyst UI is a component library built on top of RadixUI Primitives styled with TailwindCSS'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='flex flex-col justify-start items-center p-24 min-h-screen space-y-16'>
				<div className='w-full flex items-center justify-center'>
					<a
						className='flex flex-col items-center justify-center'
						href='/'
					>
						<Image
							src='/assets/logo.png'
							alt='CatalystUI Logo'
							width={64}
							height={64}
							priority
						/>
						<span className='text-base font-semibold'>
							Catalyst UI
						</span>
					</a>
				</div>

				<div className=''>
					<div className='flex flex-col items-center justify-center space-y-8'>
						<p className='w-3/4 text-2xl font-semibold text-center leading-relaxed'>
							Component library built on top of RadixUI Primitives
							styled with TailwindCSS.
						</p>
						<Link href='/docs'>
							<PrimaryButton
								className='z-10'
								padding='px-6 py-2'
								textSize='text-lg'
							>
								Get Started
							</PrimaryButton>
						</Link>
					</div>
				</div>
			</main>
		</>
	)
}

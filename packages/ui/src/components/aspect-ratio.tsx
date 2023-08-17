import { FC, Fragment } from 'react'
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'
import clsx from 'clsx'

interface AspectRatioProps {
	alt: string
	ratio: number
	src: string
}

const AspectRatio: FC<AspectRatioProps> = ({ alt, ratio, src }) => {
	return (
		<Fragment>
			<AspectRatioPrimitive.Root
				ratio={ratio}
				className='cui-group cui-relative cui-h-full cui-w-full cui-overflow-hidden cui-rounded-lg cui-shadow-md'
			>
				<div
					className={clsx([
						'cui-absolute cui-inset-0 cui-bg-ui cui-object-cover group-hover:cui-bg-ui',
						'cui-transition-colors cui-duration-300 cui-ease-in-out',
					])}
				>
					<img
						alt={alt}
						className='h-full w-full mix-blend-overlay'
						loading='lazy'
						src={src}
					/>
				</div>
			</AspectRatioPrimitive.Root>
		</Fragment>
	)
}

export default AspectRatio

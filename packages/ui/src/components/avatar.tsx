import type { FC, ReactNode } from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import cx from 'classnames'

interface AvatarProps {
	alt?: string
	fallback?: ReactNode | string
	src?: string
	variant?: 'circle' | 'rounded'
}

const Avatar: FC<AvatarProps> = ({ alt, fallback, src, variant }) => {
	return (
		<AvatarPrimitive.Root className='cui-relative cui-inline-flex cui-h-10 cui-w-10 cui-overflow-hidden'>
			<AvatarPrimitive.Image
				alt={alt}
				className={cx(
					'cui-h-full cui-w-full cui-object-cover cui-shadow-md',
					`${
						variant === 'circle'
							? 'cui-rounded-full'
							: 'cui-rounded'
					}`
				)}
				src={src}
			/>
			<AvatarPrimitive.Fallback
				className={cx(
					'cui-flex cui-h-full cui-w-full cui-items-center cui-justify-center cui-bg-ui cui-shadow-md',
					`${
						variant === 'circle'
							? 'cui-rounded-full'
							: 'cui-rounded'
					}`
				)}
				delayMs={500}
			>
				<span className='cui-text-sm cui-font-medium cui-uppercase cui-text-primary-foreground'>
					{fallback}
				</span>
			</AvatarPrimitive.Fallback>
		</AvatarPrimitive.Root>
	)
}

export default Avatar

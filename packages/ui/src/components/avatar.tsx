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
		<AvatarPrimitive.Root className='relative inline-flex h-10 w-10 overflow-hidden'>
			<AvatarPrimitive.Image
				alt={alt}
				className={cx(
					'h-full w-full object-cover shadow-md',
					`${variant === 'circle' ? 'rounded-full' : 'rounded'}`
				)}
				src={src}
			/>
			<AvatarPrimitive.Fallback
				className={cx(
					'flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-800 shadow-md',
					`${variant === 'circle' ? 'rounded-full' : 'rounded'}`
				)}
				delayMs={500}
			>
				<span className='text-sm font-medium uppercase text-gray-700 dark:text-gray-400'>
					{fallback}
				</span>
			</AvatarPrimitive.Fallback>
		</AvatarPrimitive.Root>
	)
}

export default Avatar

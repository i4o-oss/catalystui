import type { FC, ReactNode } from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import cx from 'classnames'

export enum Variant {
	Circle,
	Rounded,
}

interface AvatarProps {
	alt?: string
	fallback?: ReactNode | string
	src?: string
	variant?: Variant
}

const Avatar: FC<AvatarProps> = ({ alt, fallback, src, variant }) => {
	return (
		<AvatarPrimitive.Root className='relative inline-flex h-10 w-10'>
			<AvatarPrimitive.Image
				alt={alt}
				className={cx(
					'h-full w-full object-cover',
					{
						[Variant.Circle]: 'rounded-full',
						[Variant.Rounded]: 'rounded',
					}[variant as number]
				)}
				src={src}
			/>
			<AvatarPrimitive.Fallback
				className={cx(
					'flex h-full w-full items-center justify-center bg-white dark:bg-gray-800',
					{
						[Variant.Circle]: 'rounded-full',
						[Variant.Rounded]: 'rounded',
					}[variant as number]
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

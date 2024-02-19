import type { FC, ReactNode } from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import clsx from 'clsx'

interface AvatarProps {
	alt?: string
	fallback?: ReactNode | string
	size: 'small' | 'base' | 'large'
	src?: string
	variant?: 'circle' | 'rounded'
}

const Avatar: FC<AvatarProps> = ({
	alt,
	fallback,
	size = 'base',
	src,
	variant,
}) => {
	return (
		<AvatarPrimitive.Root
			className={clsx(
				'cui-relative cui-inline-flex cui-overflow-hidden',
				`${
					size === 'small'
						? 'cui-h-8 cui-w-8'
						: size === 'base'
						? 'cui-h-10 cui-w-10'
						: 'cui-h-12 cui-w-12'
				}`
			)}
		>
			<AvatarPrimitive.Image
				alt={alt}
				className={clsx([
					'cui-h-full cui-w-full cui-object-cover cui-shadow-md',
					`${
						variant === 'circle'
							? 'cui-rounded-full'
							: 'cui-rounded'
					}`,
				])}
				src={src}
			/>
			<AvatarPrimitive.Fallback
				className={clsx([
					'cui-flex cui-h-full cui-w-full cui-items-center cui-justify-center cui-bg-ui cui-shadow-md',
					`${
						variant === 'circle'
							? 'cui-rounded-full'
							: 'cui-rounded'
					}`,
				])}
				delayMs={500}
			>
				<span className='cui-text-sm cui-font-medium cui-uppercase cui-text-foreground'>
					{fallback}
				</span>
			</AvatarPrimitive.Fallback>
		</AvatarPrimitive.Root>
	)
}

export default Avatar

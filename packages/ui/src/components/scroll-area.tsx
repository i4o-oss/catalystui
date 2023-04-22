import type { FC, ReactNode } from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import cx from 'classnames'

interface ScrollAreaProps {
	className?: string
	children: ReactNode
	title?: ReactNode | string
}

const ScrollArea: FC<ScrollAreaProps> = ({ className, children, title }) => (
	<ScrollAreaPrimitive.Root
		className={`${className} cui-w-[200px] cui-h-[225px] cui-rounded cui-overflow-hidden cui-bg-ui`}
	>
		<ScrollAreaPrimitive.Viewport className='cui-w-full cui-h-full cui-rounded'>
			<div className='cui-py-[15px] cui-px-5'>
				<div className='cui-text-primary-foreground cui-text-[15px] cui-leading-[18px] cui-font-medium'>
					{title}
				</div>
				<div className='cui-text-primary-foreground cui-mt-2.5 cui-border-t cui-border-subtle'>
					{children}
				</div>
			</div>
		</ScrollAreaPrimitive.Viewport>
		<ScrollAreaPrimitive.Scrollbar
			className={cx(
				'cui-flex cui-select-none cui-touch-none cui-p-0.5 cui-bg-ui-hover cui-transition-colors cui-duration-[160ms] cui-ease-out',
				'data-[orientation=vertical]:cui-w-2.5 data-[orientation=horizontal]:cui-flex-col data-[orientation=horizontal]:cui-h-2.5'
			)}
			orientation='vertical'
		>
			<ScrollAreaPrimitive.Thumb
				className={cx(
					'cui-flex-1 cui-bg-primary-foreground-subtle cui-rounded-[10px] cui-relative',
					"before:cui-content-[''] before:cui-absolute before:cui-top-1/2 before:cui-left-1/2 before:-cui-translate-x-1/2",
					'before:-cui-translate-y-1/2 before:cui-w-full before:cui-h-full before:cui-min-w-[44px] before:cui-min-h-[44px]'
				)}
			/>
		</ScrollAreaPrimitive.Scrollbar>
	</ScrollAreaPrimitive.Root>
)

export default ScrollArea

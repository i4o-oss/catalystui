import type { FC, ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import cx from 'classnames'

interface Props {
	align?: 'start' | 'center' | 'end'
	content: string | ReactNode
	children: ReactNode
	side?: 'top' | 'right' | 'bottom' | 'left'
}

const Tooltip: FC<Props> = ({
	align = 'center',
	content,
	children,
	side = 'top',
}) => {
	return (
		<TooltipPrimitive.Provider>
			<TooltipPrimitive.Root>
				<TooltipPrimitive.Trigger>{children}</TooltipPrimitive.Trigger>
				<TooltipPrimitive.Portal>
					<TooltipPrimitive.Content
						align={align}
						className={cx(
							'radix-side-top:cui-animate-slide-down-fade',
							'radix-side-right:cui-animate-slide-left-fade',
							'radix-side-bottom:cui-animate-slide-up-fade',
							'radix-side-left:cui-animate-slide-right-fade',
							'cui-inline-flex cui-items-center cui-rounded-md cui-px-4 cui-py-2.5',
							'cui-bg-white dark:cui-bg-gray-800',
							'cui-max-w-xs'
						)}
						side={side}
						sideOffset={4}
					>
						<TooltipPrimitive.Arrow className='cui-fill-current cui-text-white dark:cui-text-gray-800' />
						<span className='cui-block cui-text-xs cui-leading-none cui-text-gray-700 dark:cui-text-gray-100'>
							{content}
						</span>
					</TooltipPrimitive.Content>
				</TooltipPrimitive.Portal>
			</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	)
}

export default Tooltip

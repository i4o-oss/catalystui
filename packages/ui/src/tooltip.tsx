import type { FC, ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import cx from 'classnames'

interface Props {
	content: string | ReactNode
	children: ReactNode
}

const Tooltip: FC<Props> = ({ content, children }) => {
	return (
		<TooltipPrimitive.Provider>
			<TooltipPrimitive.Root>
				<TooltipPrimitive.Trigger>{children}</TooltipPrimitive.Trigger>
				<TooltipPrimitive.Portal>
					<TooltipPrimitive.Content
						side='top'
						sideOffset={4}
						className={cx(
							'radix-side-top:animate-slide-down-fade',
							'radix-side-right:animate-slide-left-fade',
							'radix-side-bottom:animate-slide-up-fade',
							'radix-side-left:animate-slide-right-fade',
							'inline-flex items-center rounded-md px-4 py-2.5',
							'bg-white dark:bg-gray-800'
						)}
					>
						<TooltipPrimitive.Arrow className='fill-current text-white dark:text-gray-800' />
						<span className='block text-xs leading-none text-gray-700 dark:text-gray-100'>
							{content}
						</span>
					</TooltipPrimitive.Content>
				</TooltipPrimitive.Portal>
			</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	)
}

export default Tooltip

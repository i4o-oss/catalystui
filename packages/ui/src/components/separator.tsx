import type { FC } from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import cx from 'classnames'

interface SeparatorProps {
	decorative?: boolean
	orientation: 'horizontal' | 'vertical'
}

const Separator: FC<SeparatorProps> = ({ decorative = true, orientation }) => {
	return (
		<SeparatorPrimitive.Root
			className={cx(
				'cui-bg-subtle',
				'data-[orientation=horizontal]:cui-h-px data-[orientation=horizontal]:cui-w-full data-[orientation=horizontal]:cui-my-4',
				'data-[orientation=vertical]:cui-h-full  data-[orientation=vertical]:cui-w-px data-[orientation=vertical]:cui-mx-4'
			)}
			decorative={decorative}
			orientation={orientation}
		/>
	)
}

export default Separator

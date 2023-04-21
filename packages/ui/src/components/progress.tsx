import * as ProgressPrimitive from '@radix-ui/react-progress'
import { FC } from 'react'

interface ProgressProps {
	percent: number
}

const Progress: FC<ProgressProps> = ({ percent }) => {
	return (
		<ProgressPrimitive.Root
			value={percent}
			className='cui-h-3 cui-w-full cui-overflow-hidden cui-rounded cui-bg-ui'
		>
			<ProgressPrimitive.Indicator
				style={{ width: `${percent}%` }}
				className='cui-h-full cui-bg-primary-foreground cui-duration-300 cui-ease-in-out'
			/>
		</ProgressPrimitive.Root>
	)
}

export default Progress

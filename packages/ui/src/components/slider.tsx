import type { FC } from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import cx from 'classnames'

interface SliderProps {
	ariaLabel: string
	defaultValue: number[]
	min?: number
	max: number
	name?: string
	onValueChange?: (value: number[]) => void
	onValueCommit?: (value: number[]) => void
	step: number
	value?: number[]
}

// TODO: update styles
const Slider: FC<SliderProps> = ({
	ariaLabel,
	defaultValue,
	min = 0,
	max,
	name,
	onValueChange,
	onValueCommit,
	step,
	value,
}) => {
	return (
		<SliderPrimitive.Root
			aria-label={ariaLabel}
			className='cui-relative cui-flex cui-h-5 cui-w-64 cui-touch-none cui-items-center'
			defaultValue={defaultValue}
			min={min}
			max={max}
			name={name}
			onValueChange={onValueChange}
			onValueCommit={onValueCommit}
			step={step}
			value={value}
		>
			<SliderPrimitive.Track className='cui-relative cui-h-1 cui-w-full cui-grow cui-rounded-full cui-bg-ui'>
				<SliderPrimitive.Range className='cui-absolute cui-h-full cui-rounded-full cui-bg-brand' />
			</SliderPrimitive.Track>
			{defaultValue && defaultValue.length > 0
				? defaultValue.map((_, index) => (
						<SliderPrimitive.Thumb
							className={cx(
								'cui-block cui-h-5 cui-w-5 cui-rounded-full cui-bg-brand',
								'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75'
							)}
							key={`thumb-${index}`}
						/>
				  ))
				: value?.map((_, index) => (
						<SliderPrimitive.Thumb
							className={cx(
								'cui-block cui-h-5 cui-w-5 cui-rounded-full cui-bg-brand',
								'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75'
							)}
							key={`thumb-${index}`}
						/>
				  ))}
		</SliderPrimitive.Root>
	)
}

export default Slider

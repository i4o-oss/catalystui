import type { FC } from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import cx from 'classnames'

interface SliderProps {
    ariaLabel: string
    defaultValue: number[]
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
            className='relative flex h-5 w-64 touch-none items-center'
            defaultValue={defaultValue}
            max={max}
            name={name}
            onValueChange={onValueChange}
            onValueCommit={onValueCommit}
            step={step}
            value={value}
        >
            <SliderPrimitive.Track className='relative h-1 w-full grow rounded-full bg-white dark:bg-gray-800'>
                <SliderPrimitive.Range className='absolute h-full rounded-full bg-purple-600 dark:bg-white' />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb
                className={cx(
                    'block h-5 w-5 rounded-full bg-purple-600 dark:bg-white',
                    'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
                )}
            />
        </SliderPrimitive.Root>
    )
}

export default Slider

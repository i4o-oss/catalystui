import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import type { FC } from 'react'
import cx from 'classnames'

type RadioOption = {
	value: string
	id: string
	label: string
}

type RadioGroupProps = {
	className?: string
	defaultValue: string
	options: RadioOption[]
	name: string
	onChange?: (value: string) => void
}

const RadioGroup: FC<RadioGroupProps> = ({
	className,
	defaultValue,
	options,
	name,
	onChange,
}) => {
	return (
		<RadioGroupPrimitive.Root
			className={className}
			defaultValue={defaultValue}
			name={name}
			onValueChange={onChange}
		>
			{options.map((option, index) => (
				<div key={index} className='flex items-center space-x-2'>
					<RadioGroupPrimitive.Item
						className={cx(
							// Setting the background in dark properly requires a workaround (see css/tailwind.css)
							'h-4 w-4 rounded-full border border-transparent bg-gray-100 text-purple-600 dark:bg-gray-900',
							'focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800',
							'border border-transparent radix-state-checked:border-brand-500'
						)}
						key={option.id}
						id={option.id}
						value={option.value}
					>
						<RadioGroupPrimitive.Indicator className='relative flex h-full w-full items-center justify-center rounded-full after:block after:h-2 after:w-2 after:rounded-full after:bg-brand-500 after:content-[""]' />
					</RadioGroupPrimitive.Item>
					<label className='text-sm' htmlFor={option.id}>
						{option.label}
					</label>
				</div>
			))}
		</RadioGroupPrimitive.Root>
	)
}

export default RadioGroup

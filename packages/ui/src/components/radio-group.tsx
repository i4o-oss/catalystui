import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import type { FC, ReactNode } from 'react'
import clsx from 'clsx'

type RadioOption = {
	value: string
	id: string
	label: string | ReactNode
}

type RadioGroupProps = {
	className?: string
	defaultValue: string
	options: RadioOption[]
	name: string
	onChange?: (value: string) => void
}

// TODO: Clicking on label should select the radio
const RadioGroup: FC<RadioGroupProps> = ({
	className,
	defaultValue,
	options,
	name,
	onChange,
}) => {
	return (
		<RadioGroupPrimitive.Root
			className={`cui-flex cui-flex-col cui-space-y-2 ${className}`}
			defaultValue={defaultValue}
			name={name}
			onValueChange={onChange}
		>
			{options.map((option, index) => (
				<div
					key={index}
					className='cui-flex cui-items-center cui-space-x-2'
				>
					<RadioGroupPrimitive.Item
						className={clsx([
							'cui-h-5 cui-w-5 cui-rounded-full cui-border cui-border-transparent !cui-bg-ui cui-text-brand',
							'focus:cui-outline-none focus:cui-ring-0 focus:cui-ring-offset-0 focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75 focus-visible:cui-ring-offset-2 dark:focus-visible:cui-ring-offset-brand',
							'cui-border cui-border-transparent radix-state-checked:cui-border-transparent',
						])}
						key={option.id}
						id={option.id}
						value={option.value}
					>
						<RadioGroupPrimitive.Indicator className='cui-relative cui-flex cui-h-full cui-w-full cui-items-center cui-justify-center cui-rounded-full after:cui-block after:cui-h-2 after:cui-w-2 after:cui-rounded-full after:cui-bg-brand after:cui-content-[""]' />
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

import type { FC, ReactNode } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as LabelPrimitive from '@radix-ui/react-label'
import clsx from 'clsx'

const CheckboxRoot = CheckboxPrimitive.Root
const CheckboxIndicator = CheckboxPrimitive.Indicator
const Label = LabelPrimitive.Label

interface Props {
	checked?: boolean
	defaultChecked?: boolean
	disabled?: boolean
	label: string | ReactNode
	name: string
	onCheckedChange?: (checked: boolean) => void
	required?: boolean
}

const Checkbox: FC<Props> = ({
	checked,
	defaultChecked = false,
	disabled = false,
	label,
	name,
	onCheckedChange,
	required = false,
}) => {
	return (
		<div className='cui-flex cui-items-center cui-cursor-pointer'>
			<CheckboxRoot
				id={name}
				className={clsx([
					'cui-flex cui-h-5 cui-w-5 cui-items-center cui-justify-center cui-rounded-md',
					'radix-disabled:cui-bg-brand-subtle radix-disabled:cui-cursor-not-allowed',
					'radix-state-checked:cui-bg-brand radix-state-unchecked:cui-bg-ui',
					'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75',
				])}
				checked={checked}
				defaultChecked={defaultChecked}
				disabled={disabled}
				name={name}
				onCheckedChange={onCheckedChange}
				required={required}
			>
				<CheckboxIndicator>
					<CheckIcon
						className={clsx([
							'cui-h-4 cui-w-4 cui-self-center',
							`${
								disabled
									? 'cui-text-foreground-subtle'
									: 'cui-text-foreground'
							}`,
						])}
					/>
				</CheckboxIndicator>
			</CheckboxRoot>

			<Label
				htmlFor={name}
				className='cui-ml-2 cui-text-sm cui-text-foreground'
			>
				{label}
			</Label>
		</div>
	)
}

export default Checkbox

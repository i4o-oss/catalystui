import type { FC, ReactNode } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as LabelPrimitive from '@radix-ui/react-label'
import cx from 'classnames'

const CheckboxRoot = CheckboxPrimitive.Root
const CheckboxIndicator = CheckboxPrimitive.Indicator
const Label = LabelPrimitive.Label

interface Props {
	defaultChecked?: boolean
	disabled?: boolean
	label: string | ReactNode
	name: string
	required?: boolean
}

const Checkbox: FC<Props> = ({
	defaultChecked = false,
	disabled = false,
	label,
	name,
	required = false,
}) => {
	return (
		<div className='cui-flex cui-items-center'>
			<CheckboxRoot
				id={name}
				className={cx(
					'cui-flex cui-h-5 cui-w-5 cui-items-center cui-justify-center cui-rounded',
					'radix-state-checked:cui-bg-brand-500 radix-state-unchecked:cui-bg-gray-100 dark:radix-state-unchecked:cui-bg-gray-900',
					'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand-500 focus-visible:cui-ring-opacity-75'
				)}
				defaultChecked={defaultChecked}
				disabled={disabled}
				name={name}
				required={required}
			>
				<CheckboxIndicator>
					<CheckIcon className='cui-h-4 cui-w-4 cui-self-center cui-text-white' />
				</CheckboxIndicator>
			</CheckboxRoot>

			<Label
				htmlFor={name}
				className='cui-ml-2 cui-select-none cui-text-sm cui-text-gray-900 dark:cui-text-gray-100'
			>
				{label}
			</Label>
		</div>
	)
}

export default Checkbox

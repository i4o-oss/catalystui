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
		<div className='flex items-center'>
			<CheckboxRoot
				id={name}
				className={cx(
					'flex h-5 w-5 items-center justify-center rounded',
					'radix-state-checked:bg-brand-500 radix-state-unchecked:bg-gray-100 dark:radix-state-unchecked:bg-gray-900',
					'focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75'
				)}
				defaultChecked={defaultChecked}
				disabled={disabled}
				name={name}
				required={required}
			>
				<CheckboxIndicator>
					<CheckIcon className='h-4 w-4 self-center text-white' />
				</CheckboxIndicator>
			</CheckboxRoot>

			<Label
				htmlFor={name}
				className='ml-2 select-none text-sm text-gray-900 dark:text-gray-100'
			>
				{label}
			</Label>
		</div>
	)
}

export default Checkbox

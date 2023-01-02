import type { FC } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as LabelPrimitive from '@radix-ui/react-label'
import cx from 'classnames'

const CheckboxRoot = CheckboxPrimitive.Root
const CheckboxIndicator = CheckboxPrimitive.Indicator
const Label = LabelPrimitive.Label

interface Props {
	defaultChecked?: boolean
	label: string
}

const Checkbox: FC<Props> = ({ defaultChecked, label }) => {
	return (
		<form className='flex items-center'>
			<CheckboxRoot
				id='c1'
				defaultChecked={defaultChecked}
				className={cx(
					'flex h-5 w-5 items-center justify-center rounded',
					'radix-state-checked:bg-purple-600 radix-state-unchecked:bg-gray-100 dark:radix-state-unchecked:bg-gray-900',
					'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
				)}
			>
				<CheckboxIndicator>
					<CheckIcon className='h-4 w-4 self-center text-white' />
				</CheckboxIndicator>
			</CheckboxRoot>

			<Label
				htmlFor='c1'
				className='ml-3 select-none text-sm font-medium text-gray-900 dark:text-gray-100'
			>
				{label}
			</Label>
		</form>
	)
}

export default Checkbox

import * as SwitchPrimitive from '@radix-ui/react-switch'
import cx from 'classnames'
import type { FC, ReactNode } from 'react'

const SwitchRoot = SwitchPrimitive.Root
const SwitchThumb = SwitchPrimitive.Thumb

interface Props {
	defaultChecked?: boolean
	icon?: ReactNode
	onCheckedChange?: (checked: boolean) => void
	name: string
}

const Switch: FC<Props> = ({ defaultChecked, icon, onCheckedChange, name }) => {
	return (
		<SwitchRoot
			className={cx(
				'group',
				'radix-state-checked:bg-brand-500',
				'radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-gray-900',
				'relative inline-flex h-[20px] w-[32px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
				'focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75'
			)}
			defaultChecked={defaultChecked}
			onCheckedChange={onCheckedChange}
			name={name}
		>
			<SwitchThumb
				className={cx(
					'group-radix-state-checked:translate-x-3',
					'group-radix-state-unchecked:translate-x-0',
					'flex items-center justify-center',
					'pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out'
				)}
			>
				{icon}
			</SwitchThumb>
		</SwitchRoot>
	)
}

export default Switch

import * as SwitchPrimitive from '@radix-ui/react-switch'
import clsx from 'clsx'
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
			className={clsx([
				'cui-group',
				'radix-state-checked:cui-bg-brand',
				'radix-state-unchecked:cui-bg-ui',
				'cui-relative cui-inline-flex cui-h-[20px] cui-w-[32px] cui-flex-shrink-0 cui-cursor-pointer cui-rounded-full cui-border-2 cui-border-transparent cui-transition-colors cui-duration-200 cui-ease-in-out',
				'focus:cui-outline-none focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75',
			])}
			defaultChecked={defaultChecked}
			onCheckedChange={onCheckedChange}
			name={name}
		>
			<SwitchThumb
				className={clsx([
					'group-radix-state-checked:cui-translate-x-3',
					'group-radix-state-unchecked:cui-translate-x-0',
					'cui-flex cui-items-center cui-justify-center',
					'cui-pointer-events-none cui-inline-block cui-h-[16px] cui-w-[16px] cui-transform cui-rounded-full cui-bg-white cui-shadow-lg cui-ring-0 cui-transition cui-duration-200 cui-ease-in-out',
				])}
			>
				{icon}
			</SwitchThumb>
		</SwitchRoot>
	)
}

export default Switch

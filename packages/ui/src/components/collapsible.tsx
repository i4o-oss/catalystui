import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { Cross2Icon, RowSpacingIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { IconButton } from './buttons'

type CollapsedItem = ReactNode | string

interface CollapsibeProps {
	first: ReactNode | string
	items?: CollapsedItem[]
	title: ReactNode | string
	trigger: ReactNode | string
}

const Collapsibe: FC<CollapsibeProps> = ({ first, items, title, trigger }) => {
	const [open, setOpen] = useState(false)
	return (
		<CollapsiblePrimitive.Root
			className='cui-w-[300px]'
			open={open}
			onOpenChange={setOpen}
		>
			<div className='cui-flex cui-items-center cui-justify-between'>
				<span className='cui-text-foreground cui-text-[15px] cui-leading-[25px]'>
					{title}
				</span>
				<CollapsiblePrimitive.Trigger asChild>
					{typeof trigger !== 'string' ? (
						trigger
					) : (
						<IconButton
							className={clsx([
								'cui-rounded-full cui-h-[25px] cui-w-[25px] cui-shadow-md',
								'cui-outline-none focus:cui-shadow-black',
							])}
							icon={open ? <Cross2Icon /> : <RowSpacingIcon />}
						/>
					)}
				</CollapsiblePrimitive.Trigger>
			</div>

			<div className='cui-bg-ui text-sm cui-rounded cui-my-[10px] cui-px-4 cui-py-2'>
				{first}
			</div>

			<CollapsiblePrimitive.Content>
				{items?.map((item, index) => (
					<div
						className='cui-bg-ui text-sm cui-rounded cui-my-[10px] cui-px-4 cui-py-2'
						key={index}
					>
						{item}
					</div>
				))}
			</CollapsiblePrimitive.Content>
		</CollapsiblePrimitive.Root>
	)
}

export default Collapsibe

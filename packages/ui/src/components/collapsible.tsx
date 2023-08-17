import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons'

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
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<span className='cui-text-foreground cui-text-[15px] cui-leading-[25px]'>
					{title}
				</span>
				<CollapsiblePrimitive.Trigger asChild>
					{typeof trigger !== 'string' ? (
						trigger
					) : (
						<button className='cui-rounded-full cui-h-[25px] cui-w-[25px] cui-inline-flex cui-items-center cui-justify-center cui-text-violet11 cui-shadow-[0_2px_10px] cui-shadow-blackA7 cui-outline-none data-[state=closed]:cui-bg-white data-[state=open]:cui-bg-violet3 hover:cui-bg-violet3 focus:cui-shadow-[0_0_0_2px] focus:cui-shadow-black'>
							{open ? <Cross2Icon /> : <RowSpacingIcon />}
						</button>
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

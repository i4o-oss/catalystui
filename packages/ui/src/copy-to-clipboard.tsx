import type { FC } from 'react'
import { useState } from 'react'
import copy from 'copy-to-clipboard'
import { CopyIcon } from '@radix-ui/react-icons'
import { Button } from './buttons'
import Tooltip from './tooltip'

interface Props {
	text: string
}

const CopyToClipboard: FC<Props> = ({ text }) => {
	return (
		<Tooltip content='Copy to clipboard'>
			<Button
				className='w-8 h-8'
				padding='p-1'
				onClick={() =>
					copy(text, {
						format: 'text/plain',
					})
				}
				type='button'
			>
				<CopyIcon />
			</Button>
		</Tooltip>
	)
}

export default CopyToClipboard

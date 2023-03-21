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
				className='cui-w-8 cui-h-8'
				padding='cui-p-1'
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

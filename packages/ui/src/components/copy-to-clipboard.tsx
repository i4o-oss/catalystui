import type { FC } from 'react'
import copy from 'copy-to-clipboard'
import { CopyIcon } from '@radix-ui/react-icons'
import { IconButton } from './buttons'
import Tooltip from './tooltip'

interface Props {
	text: string
}

const CopyToClipboard: FC<Props> = ({ text }) => {
	return (
		<Tooltip content='Copy to clipboard'>
			<IconButton
				className='cui-w-8 cui-h-8 !cui-p-1'
				onClick={() =>
					copy(text, {
						format: 'text/plain',
					})
				}
				icon={<CopyIcon />}
				type='button'
			/>
		</Tooltip>
	)
}

export default CopyToClipboard

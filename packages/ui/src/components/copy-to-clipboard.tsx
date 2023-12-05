'use client'
import { useState, type FC } from 'react'
import copy from 'copy-to-clipboard'
import { CopyIcon, CheckIcon } from '@radix-ui/react-icons'
import { IconButton } from './buttons'
import Tooltip from './tooltip'

interface Props {
	text: string
}

const CopyToClipboard: FC<Props> = ({ text }) => {
	const [clicked, setClicked] = useState(false)
	const handleClick = () => {
		setClicked(true)
		copy(text, {
			format: 'text/plain',
		})
		setTimeout(() => {
			setClicked(false)
		}, 2000)
	}
	return (
		<Tooltip content='Copy to clipboard'>
			<IconButton
				className='cui-w-8 cui-h-8 !cui-p-1'
				onClick={() => handleClick()}
				icon={
					clicked ? <CheckIcon className='w-6 h-6' /> : <CopyIcon />
				}
				type='button'
			/>
		</Tooltip>
	)
}

export default CopyToClipboard

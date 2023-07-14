import type { FC } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

interface LabelProps {
    htmlFor: string
    label: string
}

// TODO: update styles
const Label: FC<LabelProps> = ({ htmlFor, label }) => {
    return (
        <LabelPrimitive.Root
            className='text-[15px] font-medium leading-[35px] text-white'
            htmlFor={htmlFor}
        >
            {label}
        </LabelPrimitive.Root>
    )
}

export default Label

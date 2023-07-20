import type { FC } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

interface LabelProps {
    htmlFor: string
    label: string
}

const Label: FC<LabelProps> = ({ htmlFor, label }) => {
    return (
        <LabelPrimitive.Root
            className='cui-text-sm cui-font-medium leading-loose cui-text-primary-foreground'
            htmlFor={htmlFor}
        >
            {label}
        </LabelPrimitive.Root>
    )
}

export default Label

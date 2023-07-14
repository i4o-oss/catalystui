import type { FC, ReactNode } from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import cx from 'classnames'

interface ToggleProps {
    ariaLabel: string
    children: ReactNode
}

// TODO: check and update styles
const Toggle: FC<ToggleProps> = ({ ariaLabel, children }) => (
    <TogglePrimitive.Root
        aria-label={ariaLabel}
        className={cx(
            'cui-group cui-transition-colors cui-duration-200',
            'hover:cui-bg-ui-hover',
            'radix-state-on:!cui-bg-ui-states cui-text-primary-foreground',
            'cui-p-2 cui-rounded-md',
            'focus:cui-relative focus:cui-outline-none focus-visible:cui-z-20 focus-visible:cui-ring focus-visible:cui-ring-brand focus-visible:cui-ring-opacity-75'
        )}
    >
        {children}
    </TogglePrimitive.Root>
)

export default Toggle

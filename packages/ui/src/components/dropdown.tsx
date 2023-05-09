import type { FC, ReactNode } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import cx from 'classnames'
import { ChevronRightIcon } from '@radix-ui/react-icons'

interface DropdownMenuItem {
    icon?: ReactNode
    label?: string | ReactNode
    link?: string
    openLinkInNewTab?: boolean
    onSelect?: (e: Event) => void
    shortcut?: string
    type: 'item' | 'separator' | 'submenu'
    submenu?: DropdownMenuItem[]
}

interface DropdownMenuProps {
    align?: 'end' | 'start' | 'center' | undefined
    defaultOpen?: boolean
    items: DropdownMenuItem[]
    open?: boolean
    onOpenChange?: (open: boolean) => void
    sideOffset?: number
    trigger: ReactNode
}

const DropdownMenu: FC<DropdownMenuProps> = ({
    align = 'end',
    defaultOpen,
    items,
    open,
    onOpenChange,
    sideOffset = 5,
    trigger,
}) => {
    return (
        <DropdownMenuPrimitive.Root
            defaultOpen={defaultOpen}
            open={open}
            onOpenChange={onOpenChange}
        >
            <DropdownMenuPrimitive.Trigger asChild={true}>
                {trigger}
            </DropdownMenuPrimitive.Trigger>
            <DropdownMenuPrimitive.Portal className='cui-z-[100]'>
                <DropdownMenuPrimitive.Content
                    align={align}
                    asChild={true}
                    className={cx(
                        'radix-side-top:cui-animate-slide-up radix-side-bottom:cui-animate-slide-down',
                        'cui-w-auto cui-min-w-[14rem] cui-max-w-[20rem] cui-rounded-lg cui-p-1 cui-shadow-md',
                        'cui-bg-ui',
                        'cui-z-[100]'
                    )}
                    sideOffset={sideOffset}
                >
                    <div>
                        {items.map(
                            (
                                {
                                    label,
                                    link,
                                    icon,
                                    onSelect,
                                    openLinkInNewTab = false,
                                    shortcut,
                                    type,
                                    submenu,
                                },
                                i
                            ) => {
                                if (type === 'separator') {
                                    return (
                                        <DropdownMenuPrimitive.Separator
                                            key={i}
                                            className='cui-my-1 cui-h-px cui-bg-subtle'
                                        />
                                    )
                                } else if (type === 'submenu') {
                                    return (
                                        <DropdownMenuPrimitive.Sub key={i}>
                                            <DropdownMenuPrimitive.SubTrigger
                                                className={cx(
                                                    'cui-flex cui-cursor-pointer cui-select-none cui-items-center cui-space-x-2 cui-rounded-md cui-px-2 cui-py-2 cui-outline-none',
                                                    'cui-text-primary-foreground focus:cui-bg-ui-states'
                                                )}
                                            >
                                                <div className='cui-basis-4'>
                                                    {icon}
                                                </div>
                                                <span className='cui-text-sm cui-font-normal cui-flex-1'>
                                                    {label}
                                                </span>
                                                <ChevronRightIcon className='cui-w-4 cui-h-4' />
                                            </DropdownMenuPrimitive.SubTrigger>
                                            <DropdownMenuPrimitive.SubContent
                                                className={cx(
                                                    ' radix-side-top:cui-animate-slide-up radix-side-bottom:cui-animate-slide-down',
                                                    'cui-w-48 cui-rounded-lg cui-px-1.5.5 cui-py-1 cui-shadow-lg md:cui-w-56',
                                                    'cui-bg-ui'
                                                )}
                                                sideOffset={sideOffset}
                                                alignOffset={-5}
                                            >
                                                {submenu?.map(
                                                    (
                                                        {
                                                            label,
                                                            link,
                                                            icon,
                                                            onSelect,
                                                            shortcut,
                                                            type,
                                                        },
                                                        j
                                                    ) => {
                                                        if (
                                                            type === 'separator'
                                                        ) {
                                                            return (
                                                                <DropdownMenuPrimitive.Separator
                                                                    key={`${i}-${j}`}
                                                                    className='cui-my-1 cui-h-px cui-bg-subtle'
                                                                />
                                                            )
                                                        } else {
                                                            return link ? (
                                                                <a
                                                                    key={`${i}-${j}`}
                                                                    href={link}
                                                                >
                                                                    <DropdownMenuPrimitive.Item
                                                                        key={i}
                                                                        className={cx(
                                                                            'cui-flex cui-cursor-pointer cui-select-none cui-items-center cui-space-x-2 cui-rounded-md cui-px-2 cui-py-2 cui-outline-none',
                                                                            'cui-text-primary-foreground focus:cui-bg-ui-states'
                                                                        )}
                                                                        onSelect={
                                                                            onSelect
                                                                        }
                                                                    >
                                                                        <div className='cui-basis-4'>
                                                                            {
                                                                                icon
                                                                            }
                                                                        </div>
                                                                        <span className='cui-text-sm cui-font-normal cui-flex-1'>
                                                                            {
                                                                                label
                                                                            }
                                                                        </span>
                                                                        {shortcut && (
                                                                            <kbd
                                                                                className={cx(
                                                                                    'cui-font-mono cui-text-[0.65rem] cui-font-normal cui-text-primary-foreground-subtle cui-px-1.5',
                                                                                    'cui-min-w-[1.6rem] cui-min-h-[1.6rem] cui-inline-flex cui-items-center cui-justify-center',
                                                                                    'cui-border cui-border-subtle cui-bg-primary cui-rounded'
                                                                                )}
                                                                            >
                                                                                {
                                                                                    shortcut
                                                                                }
                                                                            </kbd>
                                                                        )}
                                                                    </DropdownMenuPrimitive.Item>
                                                                </a>
                                                            ) : (
                                                                <DropdownMenuPrimitive.Item
                                                                    key={`${i}-${j}`}
                                                                    className={cx(
                                                                        'cui-flex cui-cursor-pointer cui-select-none cui-items-center cui-space-x-2 cui-rounded-md cui-px-2 cui-py-2 cui-outline-none',
                                                                        'cui-text-primary-foreground focus:cui-bg-ui-states'
                                                                    )}
                                                                    onSelect={
                                                                        onSelect
                                                                    }
                                                                >
                                                                    <div className='cui-basis-4'>
                                                                        {icon}
                                                                    </div>
                                                                    <span className='cui-text-sm cui-font-normal cui-flex-1'>
                                                                        {label}
                                                                    </span>
                                                                    {shortcut && (
                                                                        <kbd
                                                                            className={cx(
                                                                                'cui-font-mono cui-text-[0.65rem] cui-font-normal cui-text-primary-foreground-subtle cui-px-1.5',
                                                                                'cui-min-w-[1.6rem] cui-min-h-[1.6rem] cui-inline-flex cui-items-center cui-justify-center',
                                                                                'cui-border cui-border-subtle cui-bg-primary cui-rounded'
                                                                            )}
                                                                        >
                                                                            {
                                                                                shortcut
                                                                            }
                                                                        </kbd>
                                                                    )}
                                                                </DropdownMenuPrimitive.Item>
                                                            )
                                                        }
                                                    }
                                                )}
                                            </DropdownMenuPrimitive.SubContent>
                                        </DropdownMenuPrimitive.Sub>
                                    )
                                } else {
                                    return link ? (
                                        <a
                                            key={i}
                                            href={link}
                                            target={
                                                openLinkInNewTab
                                                    ? '_blank'
                                                    : '_self'
                                            }
                                            rel='noopener noreferrer'
                                        >
                                            <DropdownMenuPrimitive.Item
                                                key={i}
                                                className={cx(
                                                    'cui-flex cui-cursor-pointer cui-select-none cui-items-center cui-space-x-2 cui-rounded-md cui-px-2 cui-py-2 cui-outline-none',
                                                    'cui-text-primary-foreground focus:cui-bg-ui-states'
                                                )}
                                                onSelect={onSelect}
                                            >
                                                <div className='cui-basis-4'>
                                                    {icon}
                                                </div>
                                                <span className='cui-text-sm cui-font-normal cui-flex-1'>
                                                    {label}
                                                </span>
                                                {shortcut && (
                                                    <kbd
                                                        className={cx(
                                                            'cui-font-mono cui-text-[0.65rem] cui-font-normal cui-text-primary-foreground-subtle cui-px-1.5',
                                                            'cui-min-w-[1.6rem] cui-min-h-[1.6rem] cui-inline-flex cui-items-center cui-justify-center',
                                                            'cui-border cui-border-subtle cui-bg-primary cui-rounded'
                                                        )}
                                                    >
                                                        {shortcut}
                                                    </kbd>
                                                )}
                                            </DropdownMenuPrimitive.Item>
                                        </a>
                                    ) : (
                                        <DropdownMenuPrimitive.Item
                                            key={i}
                                            className={cx(
                                                'cui-flex cui-cursor-pointer cui-select-none cui-items-center cui-space-x-2 cui-rounded-md cui-px-2 cui-py-2 cui-outline-none',
                                                'cui-text-primary-foreground focus:cui-bg-ui-states'
                                            )}
                                            onSelect={onSelect}
                                        >
                                            <div className='cui-basis-4'>
                                                {icon}
                                            </div>
                                            <span className='cui-text-sm cui-font-normal cui-flex-1'>
                                                {label}
                                            </span>
                                            {shortcut && (
                                                <kbd
                                                    className={cx(
                                                        'cui-font-mono cui-text-[0.65rem] cui-font-normal cui-text-primary-foreground-subtle cui-px-1.5',
                                                        'cui-min-w-[1.6rem] cui-min-h-[1.6rem] cui-inline-flex cui-items-center cui-justify-center',
                                                        'cui-border cui-border-subtle cui-bg-primary cui-rounded'
                                                    )}
                                                >
                                                    {shortcut}
                                                </kbd>
                                            )}
                                        </DropdownMenuPrimitive.Item>
                                    )
                                }
                            }
                        )}
                    </div>
                </DropdownMenuPrimitive.Content>
            </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Root>
    )
}

export default DropdownMenu

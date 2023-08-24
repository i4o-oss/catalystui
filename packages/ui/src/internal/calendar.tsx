import { ComponentProps } from 'react'
import { DayPicker } from 'react-day-picker'
import clsx from 'clsx'

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

export type CalendarProps = ComponentProps<typeof DayPicker>

export default function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={clsx(
                'cui-bg-ui cui-p-4 cui-rounded-md cui-border cui-border-subtle',
                className
            )}
            classNames={{
                months: 'cui-flex cui-flex-col sm:cui-flex-row cui-gap-y-4 sm:cui-gap-x-4 sm:cui-gap-y-0',
                month: 'cui-gap-y-4',
                caption:
                    'cui-flex cui-justify-center cui-py-2 cui-relative cui-items-center cui-mb-2',
                caption_label: 'cui-text-sm cui-font-medium',
                nav: 'cui-gap-x-1 cui-flex cui-items-center',
                nav_button:
                    'cui-h-8 cui-w-8 !cui-bg-transparent cui-p-0 cui-opacity-50 hover:cui-opacity-100',
                nav_button_previous: 'cui-absolute cui-left-1',
                nav_button_next:
                    'cui-absolute cui-right-1 cui-flex cui-items-center cui-justify-end',
                table: 'cui-w-full cui-border-collapse cui-gap-y-1',
                head_row: 'cui-flex',
                head_cell:
                    'cui-text-foreground-subtle cui-rounded-md cui-w-8 cui-font-normal cui-text-[0.8rem]',
                row: 'cui-flex cui-w-full cui-mt-2',
                cell: 'cui-text-center cui-text-sm cui-p-0 cui-relative [&:has([aria-selected])]:!cui-bg-brand first:[&:has([aria-selected])]:cui-rounded-l-md last:[&:has([aria-selected])]:cui-rounded-r-md focus-within:cui-relative focus-within:cui-z-20 cui-rounded-md',
                day: clsx(
                    'cui-h-8 cui-w-8 cui-p-0 cui-font-normal aria-selected:cui-opacity-100 cui-rounded-md hover:!cui-bg-primary',
                    'hover:!cui-bg-primary hover:text-primary-foreground'
                ),
                day_selected:
                    '!cui-bg-primary cui-text-primary-foreground hover:!cui-bg-primary hover:cui-text-primary-foreground focus:cui-text-primary-foreground',
                day_today: '!cui-bg-brand cui-text-primary-foreground',
                day_outside: 'cui-text-foreground-subtle cui-opacity-50',
                day_disabled: 'cui-text-foreground-subtle cui-opacity-50',
                day_range_middle:
                    'aria-selected:!cui-bg-brand aria-selected:cui-text-foreground-subtle',
                day_hidden: 'cui-invisible',
                ...classNames,
            }}
            components={{
                IconLeft: ({ ...props }) => (
                    <ChevronLeftIcon className='cui-h-4 cui-w-4' />
                ),
                IconRight: ({ ...props }) => (
                    <ChevronRightIcon className='cui-h-4 cui-w-4' />
                ),
            }}
            {...props}
        />
    )
}
Calendar.displayName = 'Calendar'

export { Calendar }

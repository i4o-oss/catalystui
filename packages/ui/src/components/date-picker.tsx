import * as PopoverPrimitive from '@radix-ui/react-popover'
import Calendar from '../internal/calendar'
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import clsx from 'clsx'

interface DatePickerProps {
    onDateChange?: Dispatch<SetStateAction<Date | undefined>>
    trigger: ReactNode
}

export default function DatePicker({ onDateChange, trigger }: DatePickerProps) {
    const [date, setDate] = useState<Date | undefined>(new Date())

    const dateChangeHandler = (day: Date | undefined) => {
        onDateChange?.(day)
        setDate(day)
    }

    return (
        <div className='cui-relative cui-inline-block cui-text-left'>
            <PopoverPrimitive.Root>
                <PopoverPrimitive.Trigger>
                    {trigger}
                </PopoverPrimitive.Trigger>
                <PopoverPrimitive.Portal>
                    <PopoverPrimitive.Content
                        avoidCollisions={true}
                        className={clsx([
                            'radix-side-top:cui-animate-slide-up radix-side-bottom:cui-animate-slide-down',
                            'cui-w-auto cui-rounded cui-shadow-md',
                            'cui-bg-ui cui-mt-2',
                        ])}
                    >
                        <Calendar
                            mode='single'
                            selected={date}
                            onSelect={dateChangeHandler}
                        />
                    </PopoverPrimitive.Content>
                </PopoverPrimitive.Portal>
            </PopoverPrimitive.Root>
        </div>
    )
}

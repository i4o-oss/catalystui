import * as PopoverPrimitive from '@radix-ui/react-popover'
import Button from './buttons/shared/button'
import Calendar from '../internal/calendar'
import { useState } from 'react'
import clsx from 'clsx'
import { format } from 'date-fns'
import { CalendarIcon } from '@radix-ui/react-icons'

export default function DatePicker() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className='cui-relative cui-inline-block cui-text-left'>
            <PopoverPrimitive.Root>
                <PopoverPrimitive.Trigger>
                    <Button
                        className='cui-w-[258px] !cui-justify-start cui-gap-2 !cui-bg-transparent hover:!cui-bg-transparent active:!cui-bg-transparent focus:!cui-bg-transparent cui-border !cui-border-subtle !cui-p-4'
                        leftIcon={<CalendarIcon />}
                    >
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
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
                            onSelect={setDate}
                        />
                    </PopoverPrimitive.Content>
                </PopoverPrimitive.Portal>
            </PopoverPrimitive.Root>
        </div>
    )
}

import React, { useRef } from 'react'
import cc from 'classcat'
import Datepicker, { DatePickerProps, DatePickerOrientation } from 'datePicker'
import Divider from 'divider'
import CalendarIcon from 'icon/calendarIcon'
import Item from '_utils/item'

export interface DatePickerOverlayProps extends DatePickerProps {
  title: string
  closeOnBlur: () => void
}

const NUMBER_OF_MONTHS = 1

export const DatePickerOverlay = ({ title, closeOnBlur, ...props }: DatePickerOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  return (
    <div
      className={cc(['kirk-datePickerOverlay', props.className])}
      onBlur={evt => {
        if (!overlayRef.current.contains(evt.relatedTarget as Node)) {
          closeOnBlur()
        }
      }}
      ref={overlayRef}
    >
      <Item leftAddon={<CalendarIcon />} leftTitle={title} />
      <Divider />
      <Datepicker
        {...props}
        numberOfMonths={NUMBER_OF_MONTHS}
        className="kirk-datePickerOverlay-datepicker"
        orientation={DatePickerOrientation.HORIZONTAL}
        focus
      />
    </div>
  )
}

export default DatePickerOverlay

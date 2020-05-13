import React from 'react'
import cc from 'classcat'

import Item from '_utils/item'
import Datepicker, { DatePickerOrientation, DatePickerProps } from 'datePicker'
import Divider from 'divider'
import CalendarIcon from 'icon/calendarIcon'

export interface DatePickerOverlayProps extends DatePickerProps {
  title: string
  closeOnBlur: () => void
}

const NUMBER_OF_MONTHS = 1

export const DatePickerOverlay = ({ title, closeOnBlur, ...props }: DatePickerOverlayProps) => (
  <div className={cc(['kirk-datePickerOverlay', props.className])}>
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

export default DatePickerOverlay

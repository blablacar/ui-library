import React from 'react'
import cc from 'classcat'
import Datepicker, { DatePickerProps, DatePickerOrientation } from 'datePicker'
import Divider from 'divider'
import CalendarIcon from 'icon/calendarIcon'
import Item from '_utils/item'

export interface DatePickerOverlayProps extends DatePickerProps {
  readonly title: string
}

const NUMBER_OF_MONTHS = 1

export const DatePickerOverlay = (props: DatePickerOverlayProps) => (
  <div className={cc(['kirk-datePickerOverlay', props.className])}>
    <Item leftAddon={<CalendarIcon />} leftTitle={props.title} />
    <Divider />
    <Datepicker
      {...props}
      numberOfMonths={NUMBER_OF_MONTHS}
      className="kirk-datePickerOverlay-datepicker"
      orientation={DatePickerOrientation.HORIZONTAL}
    />
  </div>
)

export default DatePickerOverlay

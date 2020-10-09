import React from 'react'
import cc from 'classcat'

import { Item } from '../../../_internals/item'
import { DatePickerOrientation, DatePickerProps } from '../../../datePicker'
import { ContentDivider } from '../../../divider/contentDivider'
import { CalendarIcon } from '../../../icon/calendarIcon'

export type DatePickerOverlayProps = Omit<
  DatePickerProps,
  'numberOfMonths' | 'className' | 'orientation' | 'focus'
> & {
  title: string
  renderDatePickerComponent: (props: DatePickerProps) => JSX.Element
  className?: string
}

const NUMBER_OF_MONTHS = 1

export const DatePickerOverlay = ({
  title,
  renderDatePickerComponent,
  className,
  ...props
}: DatePickerOverlayProps) => (
  <div className={cc(['kirk-datePickerOverlay', className])}>
    <Item leftAddon={<CalendarIcon />} leftTitle={title} />

    <ContentDivider />

    {renderDatePickerComponent({
      ...props,
      numberOfMonths: NUMBER_OF_MONTHS,
      className: 'kirk-datePickerOverlay-datepicker',
      orientation: DatePickerOrientation.HORIZONTAL,
      focus: true,
    })}
  </div>
)

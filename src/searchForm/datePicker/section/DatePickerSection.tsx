import React from 'react'
import Datepicker, { DatePickerProps, DatePickerOrientation } from 'datePicker'
import Divider from 'divider'
import Section from 'layout/section/baseSection'
import ChevronIcon from 'icon/chevronIcon'
import Item from '_utils/item'

export interface DatePickerSectionProps extends DatePickerProps {
  readonly title: string
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export const DatePickerSection = (props: DatePickerSectionProps) => (
  <Section className={props.className}>
    <Item
      leftAddon={<ChevronIcon left />}
      leftTitle={props.title}
      tag={<button type="button" />}
      onClick={props.onClick}
    />
    <Divider />
    <Datepicker
      {...props}
      className="kirk-datePickerSection-datepicker"
      orientation={DatePickerOrientation.VERTICAL}
    />
  </Section>
)

export default DatePickerSection

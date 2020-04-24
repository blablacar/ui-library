import React, { useRef } from 'react'
import Datepicker, { DatePickerProps, DatePickerOrientation } from 'datePicker'
import Divider from 'divider'
import Section from 'layout/section/baseSection'
import ChevronIcon from 'icon/chevronIcon'
import Item from '_utils/item'
import { useFocusTrap } from '_utils/useFocusTrap'

export interface DatePickerSectionProps extends DatePickerProps {
  title: string
  onClose: () => void
}

export const DatePickerSection = ({ onClose, ...props }: DatePickerSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useFocusTrap(ref, onClose)

  return (
    <div ref={ref} role="dialog" className={props.className}>
      <Section>
        <Item
          leftAddon={<ChevronIcon left />}
          leftTitle={props.title}
          tag={<button type="button" />}
          onClick={onClose}
        />
        <Divider />
        <Datepicker
          {...props}
          className="kirk-datePickerSection-datepicker"
          orientation={DatePickerOrientation.VERTICAL}
        />
      </Section>
    </div>
  )
}

export default DatePickerSection

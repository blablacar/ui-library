import React, { useRef } from 'react'

import { Item } from '../../../_utils/item'
import { useFocusTrap } from '../../../_utils/useFocusTrap'
import { DatePickerOrientation, DatePickerProps } from '../../../datePicker'
import { Divider } from '../../../divider'
import { ChevronIcon } from '../../../icon/chevronIcon'
import { BaseSection as Section } from '../../../layout/section/baseSection'
import { TransitionSection } from '../../baseStyles'

export type DatePickerSectionProps = Omit<DatePickerProps, 'className' | 'orientation'> & {
  title: string
  onClose: () => void
  renderDatePickerComponent: (props: DatePickerProps) => JSX.Element
  className?: string
}

export const DatePickerSection = ({
  title,
  onClose,
  renderDatePickerComponent,
  className,
  ...props
}: DatePickerSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useFocusTrap(ref, onClose)

  return (
    <TransitionSection ref={ref} role="dialog" className={className}>
      <Section>
        <Item
          leftAddon={<ChevronIcon left />}
          leftTitle={title}
          tag={<button type="button" />}
          onClick={onClose}
        />

        <Divider />

        {renderDatePickerComponent({
          ...props,
          className: 'kirk-datePickerSection-datepicker',
          orientation: DatePickerOrientation.VERTICAL,
        })}
      </Section>
    </TransitionSection>
  )
}

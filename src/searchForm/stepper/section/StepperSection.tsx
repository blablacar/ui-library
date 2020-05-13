import React, { useRef, useState } from 'react'

import Item from '../../../_utils/item'
import { useFocusTrap } from '../../../_utils/useFocusTrap'
import Button, { ButtonStatus } from '../../../button'
import Divider from '../../../divider'
import ChevronIcon from '../../../icon/chevronIcon'
import Section from '../../../layout/section/baseSection'
import Stepper, { StepperDisplay, StepperProps } from '../../../stepper'

export interface StepperSectionProps extends StepperProps {
  itemTitle: string
  confirmLabel: string
  onClose: () => void
  onConfirm?: (event: React.MouseEvent<HTMLElement>) => void
}

export const StepperSection = ({
  itemTitle,
  className,
  onClose,
  confirmLabel,
  onChange,
  ...props
}: StepperSectionProps) => {
  const [itemTitleState] = useState(itemTitle)
  const [stepperValue, setStepperValue] = useState<OnChangeParameters>({
    name: props.name,
    value: props.value,
  })
  const ref = useRef<HTMLDivElement>(null)
  useFocusTrap(ref, onClose)

  return (
    <div ref={ref} role="dialog" className={className}>
      <Section>
        <Item
          leftAddon={<ChevronIcon left />}
          leftTitle={itemTitleState}
          tag={<button type="button" />}
          onClick={onClose}
        />
        <Divider />
        <Stepper {...props} onChange={setStepperValue} display={StepperDisplay.LARGE} />
        <div className="kirk-stepperSection-submit">
          <Button status={ButtonStatus.PRIMARY} onClick={() => onChange(stepperValue)}>
            {confirmLabel}
          </Button>
        </div>
      </Section>
    </div>
  )
}

export default StepperSection

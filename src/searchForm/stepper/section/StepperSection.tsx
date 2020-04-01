import React, { useState } from 'react'
import Stepper, { StepperProps, StepperDisplay } from 'stepper'
import Divider from 'divider'
import Section from 'layout/section/baseSection'
import ChevronIcon from 'icon/chevronIcon'
import Item from '_utils/item'
import { Button } from 'index'
import { ButtonStatus } from 'button'

export interface StepperSectionProps extends StepperProps {
  readonly itemTitle: string
  readonly confirmLabel: string
  readonly onBackButtonClick?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onConfirm?: (event: React.MouseEvent<HTMLElement>) => void
}

export const StepperSection = ({
  itemTitle,
  className,
  onBackButtonClick,
  confirmLabel,
  onChange,
  ...props
}: StepperSectionProps) => {
  const [itemTitleState] = useState(itemTitle)
  const [stepperValue, setStepperValue] = useState<OnChangeParameters>({
    name: props.name,
    value: props.value,
  })

  return (
    <Section className={className}>
      <Item
        leftAddon={<ChevronIcon left />}
        leftTitle={itemTitleState}
        tag={<button type="button" />}
        onClick={onBackButtonClick}
      />
      <Divider />
      <Stepper {...props} onChange={setStepperValue} display={StepperDisplay.LARGE} />
      <div className="kirk-stepperSection-submit">
        <Button status={ButtonStatus.PRIMARY} onClick={() => onChange(stepperValue)}>
          {confirmLabel}
        </Button>
      </div>
    </Section>
  )
}

export default StepperSection

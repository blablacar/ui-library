import React from 'react'
import Stepper, { StepperProps, StepperDisplay } from 'stepper'
import Divider from 'divider'
import Section from 'layout/section/baseSection'
import ChevronIcon from 'icon/chevronIcon'
import Item from '_utils/item'

export interface StepperFullScreenProps extends StepperProps {
  readonly itemTitle: string
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export const StepperFullScreen = ({
  itemTitle,
  className,
  onClick,
  ...props
}: StepperFullScreenProps) => (
  <Section className={className}>
    <Item
      leftAddon={<ChevronIcon left />}
      leftTitle={itemTitle}
      tag={<button type="button" />}
      onClick={onClick}
    />
    <Divider />
    <Stepper {...props} className="kirk-stepperFullScreen-stepper" display={StepperDisplay.LARGE} />
  </Section>
)

export default StepperFullScreen

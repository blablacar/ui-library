import React from 'react'
import cc from 'classcat'
import Stepper, { StepperProps, StepperDisplay } from 'stepper'
import Divider from 'divider'
import Item from '_utils/item'
import StandardSeat from 'icon/standardSeat'

export interface StepperOverlayProps extends StepperProps {
  readonly itemTitle: string
}

export const StepperOverlay = ({ itemTitle, className, ...props }: StepperOverlayProps) => (
  <div className={cc(['kirk-stepperOverlay', className])}>
    <Item leftAddon={<StandardSeat />} leftTitle={itemTitle} />
    <Divider />
    <Stepper {...props} className="kirk-stepperOverlay-stepper" display={StepperDisplay.LARGE} />
  </div>
)

export default StepperOverlay

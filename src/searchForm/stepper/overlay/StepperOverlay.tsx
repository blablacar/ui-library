import React from 'react'
import cc from 'classcat'

import { Item } from '../../../_internals/item'
import { ContentDivider } from '../../../divider/contentDivider'
import { StandardSeatIcon as StandardSeat } from '../../../icon/standardSeat'
import { Stepper, StepperDisplay, StepperProps } from '../../../stepper'

export type StepperOverlayProps = StepperProps &
  Readonly<{
    itemTitle: string
  }>

export const StepperOverlay = ({ itemTitle, className, ...props }: StepperOverlayProps) => (
  <div className={cc(['kirk-stepperOverlay', className])}>
    <Item leftAddon={<StandardSeat />} leftTitle={itemTitle} />
    <ContentDivider />
    <Stepper
      {...props}
      className="kirk-stepperOverlay-stepper"
      display={StepperDisplay.LARGE}
      focus
    />
  </div>
)

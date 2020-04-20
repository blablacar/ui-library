import React, { useRef } from 'react'
import cc from 'classcat'
import Stepper, { StepperProps, StepperDisplay } from 'stepper'
import Divider from 'divider'
import Item from '_utils/item'
import StandardSeat from 'icon/standardSeat'

export interface StepperOverlayProps extends StepperProps {
  itemTitle: string
  closeOnBlur: () => void
}

export const StepperOverlay = ({
  itemTitle,
  className,
  closeOnBlur,
  ...props
}: StepperOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  return (
    <div
      className={cc(['kirk-stepperOverlay', className])}
      onBlur={evt => {
        if (!overlayRef.current.contains(evt.relatedTarget as Node)) {
          closeOnBlur()
        }
      }}
      ref={overlayRef}
    >
      <Item leftAddon={<StandardSeat />} leftTitle={itemTitle} />
      <Divider />
      <Stepper
        {...props}
        className="kirk-stepperOverlay-stepper"
        display={StepperDisplay.LARGE}
        focus
      />
    </div>
  )
}

export default StepperOverlay

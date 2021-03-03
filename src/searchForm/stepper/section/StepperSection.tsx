import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { Item } from '../../../_internals/item'
import { useFocusTrap } from '../../../_internals/useFocusTrap'
import { space } from '../../../_utils/branding'
import { OnChangeParameters } from '../../../_utils/onChange'
import { Button, ButtonStatus } from '../../../button'
import { ContentDivider } from '../../../divider/contentDivider'
import { ChevronIcon, ChevronIconDirections } from '../../../icon/chevronIcon'
import { BaseSection as Section } from '../../../layout/section/baseSection'
import { Stepper, StepperDisplay, StepperProps } from '../../../stepper'
import { TransitionSection } from '../../baseStyles'

export type StepperSectionProps = StepperProps &
  Readonly<{
    itemTitle: string
    confirmLabel: string
    onClose: () => void
    onConfirm?: (event: React.MouseEvent<HTMLElement>) => void
  }>

const FullHeightSection = styled(Section)`
  height: 100%;

  & .section-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const SectionContent = styled.div`
  width: 100%;
  flex: 1 0 auto;
`

const SectionFooter = styled.div`
  margin-top: auto;
  padding: ${space.l};
`

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
    <TransitionSection ref={ref} role="dialog" className={className}>
      <FullHeightSection>
        <SectionContent>
          <Item
            leftAddon={<ChevronIcon direction={ChevronIconDirections.LEFT} />}
            leftTitle={itemTitleState}
            tag={<button type="button" />}
            onClick={onClose}
          />
          <ContentDivider />
          <Stepper {...props} onChange={setStepperValue} display={StepperDisplay.LARGE} />
        </SectionContent>

        <SectionFooter>
          <Button status={ButtonStatus.PRIMARY} onClick={() => onChange(stepperValue)}>
            {confirmLabel}
          </Button>
        </SectionFooter>
      </FullHeightSection>
    </TransitionSection>
  )
}

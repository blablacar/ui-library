import React, { useRef } from 'react'
import styled from 'styled-components'

import { space } from '../../../_utils/branding'
import { useFocusTrap } from '../../../_utils/useFocusTrap'
import { AutoCompleteProps } from '../../../autoComplete'
import Button, { ButtonStatus } from '../../../button'
import ChevronIcon from '../../../icon/chevronIcon'
import Section from '../../../layout/section/baseSection'
import { TransitionSection } from '../../baseStyles'

const BackButton = styled(Button)`
  &.kirk-button-bubble {
    margin-right: ${space.l};
    width: auto;
    border: none;
  }
`

export type AutoCompleteSectionProps = Omit<
  AutoCompleteProps,
  | 'autoFocus'
  | 'inputAddon'
  | 'embeddedInSearchForm'
  // Adding searchForItems because AutoComplete needs to be passed from the
  // renderAutocompleteComponent method
  | 'searchForItems'
> & {
  renderAutocompleteComponent: (props: Omit<AutoCompleteProps, 'searchForItems'>) => JSX.Element
  onClose: () => void
}

export const AutoCompleteSection = ({
  onClose,
  className,
  renderAutocompleteComponent,
  ...props
}: AutoCompleteSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useFocusTrap(ref, onClose)

  const backButton = (
    <BackButton status={ButtonStatus.UNSTYLED} isBubble onClick={onClose}>
      <ChevronIcon size="24" left />
    </BackButton>
  )

  return (
    <TransitionSection ref={ref} role="dialog" className={className}>
      <Section>
        {renderAutocompleteComponent({
          ...props,
          autoFocus: true,
          inputAddon: backButton,
          embeddedInSearchForm: true,
        })}
      </Section>
    </TransitionSection>
  )
}

export default AutoCompleteSection

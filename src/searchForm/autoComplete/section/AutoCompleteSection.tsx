import React, { useRef } from 'react'

import { useFocusTrap } from '../../../_utils/useFocusTrap'
import { AutoCompleteProps } from '../../../autoComplete'
import Button, { ButtonStatus } from '../../../button'
import Icon from '../../../icon/chevronIcon'
import Section from '../../../layout/section/baseSection'
import { TransitionSection } from '../../baseStyles'

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
    <Button status={ButtonStatus.UNSTYLED} isBubble onClick={onClose}>
      <Icon size="18" left />
    </Button>
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

import React from 'react'
import Section from 'layout/section/baseSection'
import Icon from 'icon/chevronIcon'
import Button, { ButtonStatus } from 'button'
import { AutoCompleteProps } from 'autoComplete'

export interface AutoCompleteSectionProps {
  readonly name: string
  readonly autocompleteComponent: React.ReactElement<AutoCompleteProps>
  readonly className?: Classcat.Class
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onSelect?: (obj: AutocompleteOnChange) => void
}

export const AutoCompleteSection = ({ onClick, className, ...props }: AutoCompleteSectionProps) => {
  const backButton = (
    <Button status={ButtonStatus.UNSTYLED} isBubble tabIndex="-1" onClick={onClick}>
      <Icon size="18" left />
    </Button>
  )

  return (
    <Section className={className}>
      {React.cloneElement(props.autocompleteComponent, {
        ...props,
        autoFocus: true,
        inputAddon: backButton,
        embeddedInSearchForm: true,
      })}
    </Section>
  )
}

export default AutoCompleteSection

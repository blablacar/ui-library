import React from 'react'
import AutoComplete, { AutoCompleteProps } from 'autoComplete'
import Section from 'layout/section/baseSection'
import Icon from 'icon/chevronIcon'
import Button, { ButtonStatus } from 'button'

export interface AutoCompleteSectionProps extends AutoCompleteProps {
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export const AutoCompleteSection = ({ onClick, ...props }: AutoCompleteSectionProps) => {
  const backButton = (
    <Button status={ButtonStatus.UNSTYLED} isBubble tabIndex="-1" onClick={onClick}>
      <Icon size="18" left />
    </Button>
  )

  return (
    <Section className={props.className}>
      <AutoComplete {...props} inputAddon={backButton} embeddedInSearchForm />
    </Section>
  )
}

export default AutoCompleteSection

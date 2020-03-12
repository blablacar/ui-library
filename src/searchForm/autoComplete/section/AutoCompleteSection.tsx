import React from 'react'
import AutoComplete, { AutoCompleteProps } from 'autoComplete'
import Section from 'layout/section/baseSection'
import Icon from 'icon/chevronIcon'
import Button, { ButtonStatus } from 'button'

export const AutoCompleteSection = (props: AutoCompleteProps) => {
  const backButton = (
    <Button status={ButtonStatus.UNSTYLED} isBubble tabIndex="-1">
      <Icon size="18" left />
    </Button>
  )

  return (
    <Section className={props.className}>
      <AutoComplete {...props} inputAddon={backButton} shouldDisplayDivider />
    </Section>
  )
}

export default AutoCompleteSection

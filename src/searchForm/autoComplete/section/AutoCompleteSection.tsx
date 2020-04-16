import React from 'react'
import Section from 'layout/section/baseSection'
import Icon from 'icon/chevronIcon'
import Button, { ButtonStatus } from 'button'
import { AutoCompleteProps } from 'autoComplete'

export type AutoCompleteSectionProps = Omit<
  AutoCompleteProps,
  | 'autoFocus'
  | 'inputAddon'
  | 'embeddedInSearchForm'
  // Adding searchForItems because AutoComplete needs to be passed from the
  // renderAutocompleteComponent method
  | 'searchForItems'
> & {
  readonly renderAutocompleteComponent: (
    props: Omit<AutoCompleteProps, 'searchForItems'>,
  ) => JSX.Element
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export const AutoCompleteSection = ({
  onClick,
  className,
  renderAutocompleteComponent,
  ...props
}: AutoCompleteSectionProps) => {
  const backButton = (
    <Button status={ButtonStatus.UNSTYLED} isBubble tabIndex="-1" onClick={onClick}>
      <Icon size="18" left />
    </Button>
  )

  return (
    <Section className={className}>
      {renderAutocompleteComponent({
        ...props,
        autoFocus: true,
        inputAddon: backButton,
        embeddedInSearchForm: true,
      })}
    </Section>
  )
}

export default AutoCompleteSection

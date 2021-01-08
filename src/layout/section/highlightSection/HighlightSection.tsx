import React from 'react'

import { RideAxis } from '_utils/rideAxis/index'

import { Button, ButtonStatus } from '../../../button'
import { ItemChoiceStyle } from '../../../itemChoice'
import { TextDisplay1 } from '../../../typography/display1'
import {
  HighlightSectionContent,
  HighlightSectionItem,
  StyledHighlightSection,
} from './HighlightSection.style'

export type HighlightSectionProps = Readonly<{
  className?: string
  children: React.ReactNode
}>

/**
 * A specialized section with an highlighting background color.
 */

export const GridListItems = () => (
  <ul>
    <li>
      <HighlightSectionItem
        label={<RideAxis from="Bus Bordeaux" to="Toulouse" />}
        data="8,99 €"
        style={ItemChoiceStyle.PRIMARY}
        href={<a href="#" />}
        aria-label="Aria label"
      />
    </li>
  </ul>
)
export const HighlightSection = (props: HighlightSectionProps) => {
  const { className, children } = props
  return (
    <StyledHighlightSection className={className}>
      <HighlightSectionContent>
        <TextDisplay1>Nos top Trajets en bus</TextDisplay1>
        <GridListItems />
        <Button status={ButtonStatus.UNSTYLED}>Show more</Button>
        {children}
      </HighlightSectionContent>
    </StyledHighlightSection>
  )
}

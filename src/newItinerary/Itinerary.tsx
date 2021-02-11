import React, { cloneElement } from 'react'

import { NormalizeProps } from '../layout/layoutNormalizer'
import { TheVoice } from '../theVoice'
import { Addon } from './Addon'
import { Connection } from './Connection'
import { HiddenStops } from './HiddenStops'
import { StyledItinerary } from './Itinerary.style'
import { Lines } from './Lines'
import { Place } from './Place'

export type ItineraryProps = NormalizeProps &
  Readonly<{
    children: JSX.Element[]
    headline?: string
    small?: boolean
  }>

// Magic to avoid having to define lines manually
const createChildrenWithLines = (
  child: JSX.Element,
  index: number,
  children: JSX.Element[],
): JSX.Element => {
  let prevLine = Lines.NONE
  let nextLine = Lines.NONE

  if (child.type === Addon) {
    if (index === 0) {
      nextLine = Lines.INACTIVE
    }
    if (index === children.length - 1) {
      prevLine = Lines.INACTIVE
    }
  }

  if (child.type === Connection) {
    prevLine = Lines.CONNECTION
    nextLine = Lines.CONNECTION
  }

  if (child.type === HiddenStops) {
    prevLine = Lines.HIDDEN_STOPS
    nextLine = Lines.HIDDEN_STOPS
  }

  // Prev line for Place
  if (child.type === Place && index > 0) {
    switch (children[index - 1].type) {
      case Addon:
        prevLine = Lines.INACTIVE
        break
      case Place:
      case HiddenStops:
        prevLine = Lines.ACTIVE
        break
      case Connection:
        prevLine = Lines.CONNECTION
        break
    }
  }

  // Next line for Place
  if (child.type === Place && index + 1 < children.length) {
    switch (children[index + 1].type) {
      case Addon:
        nextLine = Lines.INACTIVE
        break
      case Place:
      case HiddenStops:
        nextLine = Lines.ACTIVE
        break
      case Connection:
        nextLine = Lines.CONNECTION
        break
    }
  }

  return cloneElement(child, { ...child.props, nextLine, prevLine })
}

export const Itinerary = ({ children, headline, small = false }: ItineraryProps) => (
  <StyledItinerary small={small}>
    {headline && <TheVoice>{headline}</TheVoice>}
    <ul>{children.map(createChildrenWithLines)}</ul>
  </StyledItinerary>
)

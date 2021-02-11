import React from 'react'
import isEmpty from 'lodash.isempty'

import { Bullet, BulletTypes } from '../../bullet'
import { Lines } from '../Itinerary'
import { Line } from './Line'
import { StyledItineraryItem } from './ItineraryItem.style'
import { TextTitleStrong } from '../../typography/titleStrong'

export type ItineraryItemProps = Readonly<{
  line: Lines
  time?: string
  bullet?: JSX.Element
  children: React.ReactNode
  href?: string | JSX.Element
}>


export const ItineraryItem = ({ time = null, line, children, bullet = <Bullet/>, href = null }: ItineraryItemProps) => {
  // Renders <a>, custom component (SlugLink) or div based on href
  let Wrapper
  let wrapperProps = {}

  if (!isEmpty(href) && typeof href !== 'string') {
    Wrapper = href.type
    wrapperProps = href.props
  } else if (typeof href === 'string') {
    Wrapper = 'a'
    wrapperProps = { href }
  } else {
    Wrapper = 'div'
  }

  return (
    <StyledItineraryItem>
      <Wrapper {...wrapperProps}>
        <TextTitleStrong as="time" aria-hidden={isEmpty(time)}>{time}</TextTitleStrong>
        <Line line={line} bullet={bullet} />
        {children}
      </Wrapper>
    </StyledItineraryItem>
  )
}

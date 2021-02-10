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
  minHeight?: number
}>

export const ItineraryItem = ({ time = null, line, children, bullet = <Bullet/>, minHeight = 32 }: ItineraryItemProps) => (
  <StyledItineraryItem minHeight={minHeight}>
    <TextTitleStrong as="time" aria-hidden={isEmpty(time)}>{time}</TextTitleStrong>
    <Line line={line} bullet={bullet} />
    {children}
  </StyledItineraryItem>
)

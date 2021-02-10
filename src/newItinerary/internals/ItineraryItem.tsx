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
}>

export const ItineraryItem = ({ time = null, line, children, bullet = <Bullet/> }: ItineraryItemProps) => (
  <StyledItineraryItem>
    <TextTitleStrong as="time" aria-hidden={isEmpty(time)}>{time}</TextTitleStrong>
    <Line line={line} bullet={bullet} />
    {children}
  </StyledItineraryItem>
)

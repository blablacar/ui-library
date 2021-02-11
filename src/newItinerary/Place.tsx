import React from 'react'

import { Bullet, BulletTypes } from '../bullet'
import { Proximity } from '../proximity'
import { TextTitleStrong } from '../typography/titleStrong'
import { ItineraryItem, ItineraryItemProps } from './internals/ItineraryItem'
import {
  StyledChevronIcon,
  StyledContent,
  StyledLabel,
  StyledProximity,
  StyledSubLabel,
} from './Place.style'

export type PlaceProps = Omit<ItineraryItemProps, 'children'> &
  Readonly<{
    label: string
    subLabel: string
    href?: JSX.Element
    proximity?: typeof Proximity
    highlighted?: boolean
  }>

export const Place = ({
  line,
  label,
  subLabel,
  time,
  bullet = <Bullet type={BulletTypes.DEFAULT} />,
  href,
  proximity,
  highlighted = false,
}: PlaceProps) => (
  <ItineraryItem line={line} time={time} bullet={bullet}>
    <StyledContent>
      <StyledLabel highlighted={highlighted}>{label}</StyledLabel>
      {subLabel && <StyledSubLabel>{subLabel}</StyledSubLabel>}
      {proximity && <StyledProximity>{proximity}</StyledProximity>}

      {href && <StyledChevronIcon />}
    </StyledContent>
  </ItineraryItem>
)

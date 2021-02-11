import React from 'react'

import { Bullet, BulletTypes } from '../bullet'
import { Proximity } from '../proximity'
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
  prevLine,
  nextLine,
  label,
  subLabel,
  time,
  bullet = <Bullet type={BulletTypes.DEFAULT} />,
  href,
  proximity,
  highlighted = false,
}: PlaceProps) => (
  <ItineraryItem prevLine={prevLine} nextLine={nextLine} time={time} bullet={bullet} href={href}>
    <StyledContent>
      <StyledLabel highlighted={highlighted}>{label}</StyledLabel>
      {subLabel && <StyledSubLabel highlighted={highlighted}>{subLabel}</StyledSubLabel>}
      {proximity && <StyledProximity>{proximity}</StyledProximity>}
      {href && <StyledChevronIcon />}
    </StyledContent>
  </ItineraryItem>
)

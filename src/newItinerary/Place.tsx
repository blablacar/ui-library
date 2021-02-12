import React from 'react'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Bullet, BulletTypes } from '../bullet'
import { ProximityProps } from '../proximity'
import { ItineraryItem, ItineraryItemProps } from './internals/ItineraryItem'
import {
  StyledChevronIcon,
  StyledContent,
  StyledLabel,
  StyledProximity,
  StyledSubLabel,
} from './Place.style'

export type PlaceProps = A11yProps &
  Omit<ItineraryItemProps, 'children'> &
  Readonly<{
    label: string
    subLabel?: string
    href?: string | JSX.Element
    proximity?: React.ReactElement<ProximityProps>
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
  ...props
}: PlaceProps) => (
  <ItineraryItem
    prevLine={prevLine}
    nextLine={nextLine}
    time={time}
    bullet={bullet}
    href={href}
    {...pickA11yProps(props)}
  >
    <StyledContent>
      <StyledLabel highlighted={highlighted}>{label}</StyledLabel>
      {subLabel && <StyledSubLabel highlighted={highlighted}>{subLabel}</StyledSubLabel>}
      {proximity && <StyledProximity>{proximity}</StyledProximity>}
      {href && <StyledChevronIcon />}
    </StyledContent>
  </ItineraryItem>
)

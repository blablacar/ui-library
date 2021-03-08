import React from 'react'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Bullet, BulletTypes } from '../bullet'
import {
  StyledChevronIcon,
  StyledContent,
  StyledLabel,
  StyledProximity,
  StyledSubLabel,
} from './Address.style'
import { ItineraryItem, ItineraryItemProps } from './internals/ItineraryItem'
import { ProximityProps } from './Proximity'

export type AddressProps = A11yProps &
  Omit<ItineraryItemProps, 'children'> &
  Readonly<{
    label: string
    subLabel?: string
    href?: string | JSX.Element
    proximity?: React.ReactElement<ProximityProps>
    highlighted?: boolean
  }>

export const Address = ({
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
}: AddressProps) => (
  <ItineraryItem
    prevLine={prevLine}
    nextLine={nextLine}
    time={time}
    bullet={bullet}
    href={href}
    {...pickA11yProps(props)}
  >
    <StyledContent hasLink={!!href}>
      <StyledLabel $highlighted={highlighted}>{label}</StyledLabel>
      {subLabel && <StyledSubLabel $highlighted={highlighted}>{subLabel}</StyledSubLabel>}
      {proximity && <StyledProximity>{proximity}</StyledProximity>}
      {href && <StyledChevronIcon />}
    </StyledContent>
  </ItineraryItem>
)

import React from 'react'

import { Bullet, BulletTypes } from '../bullet'
import { TextCaption } from '../typography/caption'
import { StyledLabel } from './Addon.style'
import { ItineraryItem } from './internals/ItineraryItem'
import { LineProps } from './internals/Line'

export type AddonProps = LineProps &
  Readonly<{
    label: string
  }>

export const Addon = ({ prevLine, nextLine, label }: AddonProps) => (
  <ItineraryItem
    prevLine={prevLine}
    nextLine={nextLine}
    bullet={<Bullet type={BulletTypes.ADDON} />}
  >
    <StyledLabel>
      <TextCaption>{label}</TextCaption>
    </StyledLabel>
  </ItineraryItem>
)

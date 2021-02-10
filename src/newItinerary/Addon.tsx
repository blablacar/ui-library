import React from 'react'

import { TextCaption } from '../typography/caption'
import { StyledLabel } from './Addon.style'
import { Bullet, BulletTypes } from '../bullet'
import { ItineraryItem, ItineraryItemProps } from './internals/ItineraryItem'

export type AddonProps = Omit<ItineraryItemProps, 'children'> & Readonly<{
  label: string
}>

export const Addon = ({ line, label }: AddonProps) => (
  <ItineraryItem line={line} bullet={<Bullet type={BulletTypes.ADDON} />}>
    <StyledLabel>
      <TextCaption>{label}</TextCaption>
    </StyledLabel>
  </ItineraryItem>
)

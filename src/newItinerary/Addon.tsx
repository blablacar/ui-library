import React from 'react'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Bullet, BulletTypes } from '../bullet'
import { TextCaption } from '../typography/caption'
import { StyledLabel } from './Addon.style'
import { ItineraryItem } from './internals/ItineraryItem'
import { LineProps } from './internals/Line'

export type AddonProps = A11yProps &
  LineProps &
  Readonly<{
    label: string
  }>

export const Addon = ({ prevLine, nextLine, label, ...props }: AddonProps) => (
  <ItineraryItem
    prevLine={prevLine}
    nextLine={nextLine}
    bullet={<Bullet type={BulletTypes.ADDON} />}
    {...pickA11yProps(props)}
  >
    <StyledLabel>
      <TextCaption>{label}</TextCaption>
    </StyledLabel>
  </ItineraryItem>
)

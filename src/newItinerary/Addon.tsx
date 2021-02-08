import React from 'react'

import { BulletTypes } from '../bullet'
import { TextCaption } from '../typography/caption'
import { StyledAddon, StyledLabel } from './Addon.style'
import { Lines } from './Itinerary'
import { Line } from './Line'

export type AddonProps = Readonly<{
  line: Lines
  label: string
}>

export const Addon = ({ line, label }: AddonProps) => (
  <StyledAddon>
    {/* Use isSmall props from Itinerary to display or not this empty div */}
    <div style={{ width: 52 }} aria-hidden="true" />

    <Line line={line} bulletType={BulletTypes.ADDON} />
    <StyledLabel>
      <TextCaption>{label}</TextCaption>
    </StyledLabel>
  </StyledAddon>
)

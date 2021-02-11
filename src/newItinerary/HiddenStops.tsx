import React, { useState } from 'react'

import { Bullet, BulletTypes } from '../bullet'
import { HiddenStopProps } from './HiddenStop'
import { StyledHiddenStops, StyledStopsCount, StyledWrapper } from './HiddenStops.style'
import { Line } from './internals/Line'
import { Lines } from './Itinerary'

export type HiddenStopsProps = Readonly<{
  children: React.ReactElement<HiddenStopProps>[]
  label: string
}>

export const HiddenStops = ({ children, label }: HiddenStopsProps) => {
  const [hidden, setHidden] = useState(true)

  return (
    <StyledHiddenStops
      onClick={(): void => setHidden(!hidden)}
      role="button"
      aria-expanded={!hidden}
      stops={children.length}
    >
      <StyledWrapper>
        <time aria-hidden="true" />
        <Line line={Lines.HIDDEN_STOPS} bullet={<Bullet type={BulletTypes.DEFAULT} />} />
        <StyledStopsCount>{label}</StyledStopsCount>
      </StyledWrapper>

      <ul>{children}</ul>
    </StyledHiddenStops>
  )
}

import React, { Fragment, useState, cloneElement } from 'react'

import { StyledHiddenStops, StyledWrapper, StyledStopsCount } from './HiddenStops.style'
import { Lines } from './Itinerary'
import { Line } from './internals/Line'
import { Bullet, BulletTypes } from '../bullet'
import { HiddenStopProps } from './HiddenStop'

export type HiddenStopsProps = Readonly<{
  children: React.ReactElement<HiddenStopProps>[]
  label: string
}>

// FIXME animation
// FIXME filter to only allow HiddenStop
export const HiddenStops = ({ children, label }: HiddenStopsProps) => {
  const [hidden, setHidden] = useState(true)

  return (
    <StyledHiddenStops onClick={(): void => setHidden(!hidden)} role="button" aria-expanded={!hidden}>
      {hidden && (
        <StyledWrapper>
          <time aria-hidden="true" />
          <Line line={Lines.HIDDEN_STOPS_TOP} bullet={<Bullet type={BulletTypes.DEFAULT} />} />
          <Line line={Lines.HIDDEN_STOPS_BOTTOM} bullet={null} />
          <StyledStopsCount>{label}</StyledStopsCount>
        </StyledWrapper>
      )}

      {!hidden && (
        <ul>
          {children}
        </ul>
      )}
    </StyledHiddenStops>
  )
}

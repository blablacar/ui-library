import React, { useState } from 'react'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Bullet, BulletTypes } from '../bullet'
import { HiddenStopProps } from './HiddenStop'
import { StyledHiddenStops, StyledStopsCount, StyledWrapper } from './HiddenStops.style'
import { Line, LineProps } from './internals/Line'

export type HiddenStopsProps = A11yProps &
  LineProps &
  Readonly<{
    children: React.ReactElement<HiddenStopProps>[]
    label: string
  }>

export const HiddenStops = ({
  prevLine,
  nextLine,
  children,
  label,
  ...props
}: HiddenStopsProps) => {
  const [hidden, setHidden] = useState(true)

  return (
    <StyledHiddenStops
      onClick={(): void => setHidden(!hidden)}
      role="button"
      aria-expanded={!hidden}
      stops={children.length}
      {...pickA11yProps(props)}
    >
      <StyledWrapper>
        <time aria-hidden="true" />
        <Line
          prevLine={prevLine}
          nextLine={nextLine}
          bullet={<Bullet type={BulletTypes.DEFAULT} />}
        />
        <StyledStopsCount as="button">{label}</StyledStopsCount>
      </StyledWrapper>

      <ul aria-hidden={hidden}>{children}</ul>
    </StyledHiddenStops>
  )
}

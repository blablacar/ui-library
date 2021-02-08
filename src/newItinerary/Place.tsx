import React, { Fragment } from 'react'

import { BulletTypes } from '../bullet'
import { TextCaption } from '../typography/caption'
import { TextTitleStrong } from '../typography/titleStrong'
import { Lines } from './Itinerary'
import { Line } from './Line'
import { StyledLabel, StyledPlace } from './Place.style'

export type PlaceProps = Readonly<{
  line: Lines
  label: string
  subLabel: string
  time: string
  bullet?: JSX.Element
  bulletType?: BulletTypes
}>

export const Place = ({ line, label, subLabel, time, bullet, bulletType }: PlaceProps) => (
  <StyledPlace>
    <time dateTime={time} style={{ width: 52 }}>
      <TextTitleStrong>{time}</TextTitleStrong>
    </time>

    <Line line={line} bullet={bullet} bulletType={bulletType} />
    <StyledLabel>
      <TextTitleStrong>{label}</TextTitleStrong>
      {subLabel && (
        <Fragment>
          <br />
          {/** @TODO Override color of TextCaption */}
          <TextCaption>{subLabel}</TextCaption>
        </Fragment>
      )}
    </StyledLabel>
  </StyledPlace>
)

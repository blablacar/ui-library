import React, { Fragment } from 'react'
import cc from 'classcat'

import { color } from '../_utils/branding'
import { ProximityIcon } from '../icon/proximityIcon'
import { StyledCaption, StyledProximity } from './Proximity.style'

export enum Distances {
  NONE = 'NONE',
  CLOSE = 'CLOSE',
  MIDDLE = 'MIDDLE',
  FAR = 'FAR',
}

export enum ProximityDisplay {
  PILLS = 'PILLS',
  LABEL = 'LABEL',
}

const size = '20px'

const getColorAndTitle = (index: string, value: string, title: string) => {
  const defaultParams = { title: '', iconColor: color.lightGray }
  switch (value) {
    case Distances.CLOSE:
      return index === value
        ? {
            title: title || defaultParams.title,
            iconColor: color.green,
          }
        : defaultParams

    case Distances.MIDDLE:
      return index === value
        ? {
            title: title || defaultParams.title,
            iconColor: color.yellow,
          }
        : defaultParams

    case Distances.FAR:
      return index === value
        ? {
            title: title || defaultParams.title,
            iconColor: color.orange,
          }
        : defaultParams

    default:
      return defaultParams
  }
}

export type ProximityProps = Readonly<{
  className?: string
  value: Distances
  title?: string
  display?: ProximityDisplay
}>

export const Proximity = ({
  value,
  title,
  className,
  display = ProximityDisplay.PILLS,
}: ProximityProps) => (
  <StyledProximity className={cc(['kirk-proximity', className])}>
    {display === ProximityDisplay.PILLS &&
      [Distances.CLOSE, Distances.MIDDLE, Distances.FAR].map(distance => (
        <ProximityIcon key={distance} size={size} {...getColorAndTitle(distance, value, title)} />
      ))}
    {display === ProximityDisplay.LABEL && (
      <Fragment>
        <ProximityIcon size={size} {...getColorAndTitle(value, value, '')} />
        <StyledCaption color={getColorAndTitle(value, value, '').iconColor}>{title}</StyledCaption>
      </Fragment>
    )}
  </StyledProximity>
)

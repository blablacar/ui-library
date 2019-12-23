import React from 'react'
import cc from 'classcat'
import { color } from '_utils/branding'
import ProximityIcon from 'icon/proximityIcon'

export enum Distances {
  NONE = 'NONE',
  CLOSE = 'CLOSE',
  MIDDLE = 'MIDDLE',
  FAR = 'FAR',
}

const size = '20px'

const getColorAndTitle = (index: string, value: string, title: string) => {
  const defaultParams = { title: '', iconColor: color.disabled }
  switch (value) {
    case Distances.CLOSE:
      return index === value
        ? {
            title: title || defaultParams.title,
            iconColor: color.proximityClose,
          }
        : defaultParams

    case Distances.MIDDLE:
      return index === value
        ? {
            title: title || defaultParams.title,
            iconColor: color.proximityMiddle,
          }
        : defaultParams

    case Distances.FAR:
      return index === value
        ? {
            title: title || defaultParams.title,
            iconColor: color.proximityFar,
          }
        : defaultParams

    default:
      return defaultParams
  }
}

interface ProximityProps {
  readonly className?: Classcat.Class
  readonly value: Distances
  readonly title?: string
}

const Proximity = ({ value, title, className }: ProximityProps) => (
  <div className={cc(['kirk-proximity', className])}>
    {[Distances.CLOSE, Distances.MIDDLE, Distances.FAR].map(distance => (
      <ProximityIcon key={distance} size={size} {...getColorAndTitle(distance, value, title)} />
    ))}
  </div>
)

export default Proximity

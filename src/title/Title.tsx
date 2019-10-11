import React, { Fragment } from 'react'
import cc from 'classcat'
import { KirkTile } from '_utils/layout'

interface TitleProps {
  readonly className?: Classcat.Class
  readonly children: string
  readonly headingLevel?: number | string
}

export const isHeadingAvailable = (level: number) => level >= 1 && level <= 6

const Title = ({ className, children, headingLevel = 1 }: TitleProps) => {
  if (!isHeadingAvailable(Number(headingLevel))) {
    return null
  }
  return <KirkTile tag={`h${headingLevel}`} className={cc(['kirk-title', className])}>
    <Fragment>{children}</Fragment>
  </KirkTile>
}
export default Title

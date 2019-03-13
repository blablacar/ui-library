import React, { Fragment } from 'react'
import cc from 'classcat'
import style from 'title/style'

interface TitleProps {
  readonly className?: Classcat.Class
  readonly children: string
  readonly headingLevel?: number
}

export const isHeadingAvailable = (level: number) => level >= 1 && level <= 6

const Title = ({ className, children, headingLevel = 1 }: TitleProps) => {
  if (!isHeadingAvailable(headingLevel)) {
    return null
  }
  return React.createElement(
    `h${headingLevel}`,
    {
      className: cc(['kirk-title', className]),
    },
    <Fragment>
      {children}
      <style jsx>{style}</style>
    </Fragment>,
  )
}
export default Title

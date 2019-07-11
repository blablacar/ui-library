import React from 'react'
import cc from 'classcat'

interface TitleProps {
  readonly children: string
  readonly className?: string
  readonly additionalClassNames?: Classcat.Class
  readonly headingLevel?: number
}

export const isHeadingAvailable = (level: number) => level >= 1 && level <= 6

const Title = ({ className, additionalClassNames, children, headingLevel = 1 }: TitleProps) => {
  if (!isHeadingAvailable(headingLevel)) {
    return null
  }
  return React.createElement(
    `h${headingLevel}`,
    {
      className: cc(['kirk-title', className, additionalClassNames]),
    },
    children,
  )
}

export default Title

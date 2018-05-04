import React from 'react'
import cc from 'classcat'
import style from 'title/style'

interface TitleProps {
  readonly className?: Classcat.Class,
  readonly children: string,
  readonly headingLevel?: number,
}

export const isHeadingAvailable = (level: number) => Number(level) >= 1 && Number(level) <= 6

const Title = ({ className, children, headingLevel = 1 }: TitleProps) => {
  if (!isHeadingAvailable(headingLevel)) {
    return null
  }
  const Heading = `h${headingLevel}`
  return (
    <Heading className={cc(['kirk-title', className])}>
      {children}
      <style jsx>{style}</style>
    </Heading>
  )
}
export default Title

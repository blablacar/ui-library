import React from 'react'
import Title from 'title'

export interface SubHeaderProps {
  readonly className?: Classcat.Class
  readonly children: string
}

const SubHeader = ({ className, children }: SubHeaderProps) => (
  <Title className={className} headingLevel="2">
    {children}
  </Title>
)

export default SubHeader

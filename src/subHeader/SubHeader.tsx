import React from 'react'
import Title from 'title'
import cc from 'classcat'

export interface SubHeaderProps {
  readonly className?: Classcat.Class
  readonly children: string
}

const SubHeader = ({ className, children }: SubHeaderProps) => (
  <Title className={cc(['kirk-subheader', className])} headingLevel="2">
    {children}
  </Title>
)

export default SubHeader

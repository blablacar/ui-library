import React from 'react'
import cc from 'classcat'

import Title from '../title'

export interface SubHeaderProps {
  readonly className?: string
  readonly children: string
}

const SubHeader = ({ className, children }: SubHeaderProps) => (
  <Title className={cc(['kirk-subheader', className])} headingLevel="2">
    {children}
  </Title>
)

export default SubHeader

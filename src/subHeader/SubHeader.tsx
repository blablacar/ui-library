import React from 'react'

import { StyledSubHeader } from './SubHeader.style'

export interface SubHeaderProps {
  readonly children: string
}

export const SubHeader = ({ children }: SubHeaderProps) => (
  <StyledSubHeader headingLevel="2">{children}</StyledSubHeader>
)

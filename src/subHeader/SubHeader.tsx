import React from 'react'

import { StyledSubHeader } from './SubHeader.style'

export type SubHeaderProps = Readonly<{
  children: string
}>

export const SubHeader = ({ children }: SubHeaderProps) => (
  <StyledSubHeader headingLevel="2">{children}</StyledSubHeader>
)

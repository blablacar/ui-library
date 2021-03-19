import React from 'react'

import { StyledSubHeader } from './SubHeader.style'

export type SubHeaderProps = Readonly<{
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any> // from styled-components types
}>

export const SubHeader = ({ children, as = 'h2' }: SubHeaderProps) => (
  <StyledSubHeader as={as}>{children}</StyledSubHeader>
)

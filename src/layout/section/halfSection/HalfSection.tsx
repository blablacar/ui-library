import React from 'react'

import { HalfSectionElements } from './HalfSection.style'

export type HalfSectionProps = Readonly<{
  children: React.ReactNode
}>

const Content = ({ children }: HalfSectionProps) => (
  <HalfSectionElements.Content> {children} </HalfSectionElements.Content>
)

export const HalfSection = {
  Content,
}

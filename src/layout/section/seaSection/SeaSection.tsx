import React from 'react'

import { SeaSectionElements } from './SeaSection.style'

type IllustrationType = { small: string; large: string }
export type SeaSectionProps = Readonly<{
  children: React.ReactNode
  leading: string
  illustationUrl: IllustrationType
}>

export const SeaSection = ({ children, leading, illustationUrl }: SeaSectionProps) => (
  <SeaSectionElements.Wrapper>
    <SeaSectionElements.Body>{children}</SeaSectionElements.Body>
    <SeaSectionElements.Media small={illustationUrl.small} large={illustationUrl.large}>
      <SeaSectionElements.Leading as="h1">{leading}</SeaSectionElements.Leading>
    </SeaSectionElements.Media>
  </SeaSectionElements.Wrapper>
)

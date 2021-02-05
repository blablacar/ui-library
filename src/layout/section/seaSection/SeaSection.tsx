import React from 'react'

import { SeaSectionElements } from './SeaSection.style'

type IllustrationType = { small: string; large: string }
export type SeaSectionProps = Readonly<{
  children: React.ReactNode
  heading: string
  illustationUrl: IllustrationType
}>

export const SeaSection = ({ children, heading, illustationUrl }: SeaSectionProps) => (
  <SeaSectionElements.Wrapper>
    <SeaSectionElements.Body>{children}</SeaSectionElements.Body>
    <SeaSectionElements.Media small={illustationUrl.small} large={illustationUrl.large}>
      <SeaSectionElements.Heading as="h1">{heading}</SeaSectionElements.Heading>
    </SeaSectionElements.Media>
  </SeaSectionElements.Wrapper>
)

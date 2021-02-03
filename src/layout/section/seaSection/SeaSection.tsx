import React from 'react'

import { SEASectionElements } from './SeaSection.style'

type IllustrationType = { small: string; large: string }
export type SEASectionProps = Readonly<{
  children: React.ReactNode
  leading: string
  illustationUrl: IllustrationType
}>

export const SEASection = ({ children, leading, illustationUrl }: SEASectionProps) => (
  <SEASectionElements.Wrapper>
    <SEASectionElements.Body>{children}</SEASectionElements.Body>
    <SEASectionElements.Media small={illustationUrl.small} large={illustationUrl.large}>
      <SEASectionElements.Leading as="h1">{leading}</SEASectionElements.Leading>
    </SEASectionElements.Media>
  </SEASectionElements.Wrapper>
)

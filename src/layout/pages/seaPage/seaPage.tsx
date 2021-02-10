import React from 'react'

import { SeaPageElements } from './seaPage.style'

export type IllustrationType = { small: string; large: string }
export type SeaPageProps = Readonly<{
  children: React.ReactNode
  heading: string
  illustationUrl: IllustrationType
}>

export const SeaPage = ({ children, heading, illustationUrl }: SeaPageProps) => (
  <SeaPageElements.Wrapper>
    <SeaPageElements.Media small={illustationUrl.small} large={illustationUrl.large}>
      <SeaPageElements.Heading as="h1">{heading}</SeaPageElements.Heading>
    </SeaPageElements.Media>
    <SeaPageElements.Body>{children}</SeaPageElements.Body>
  </SeaPageElements.Wrapper>
)

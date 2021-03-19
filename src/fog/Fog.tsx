import React from 'react'

import 'wicg-inert'

import { StyledFog, StyledFogContainer } from './Fog.style'

export type FogProps = Readonly<{
  isLoading?: boolean
  children: React.ReactNode
}>

export const Fog = ({ isLoading, children }: FogProps) => (
  <StyledFogContainer>
    <StyledFog $isLoading={isLoading} aria-hidden="true" />
    <div ref={node => node && isLoading && node.setAttribute('inert', '')}>{children}</div>
  </StyledFogContainer>
)

import React from 'react'
import styled from 'styled-components'

import { space } from '../../_utils/branding'

export enum SpacingDividerSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type StyledSpacingDividerProps = Readonly<{
  size: SpacingDividerSize
}>

export type SpacingDividerProps = Readonly<{
  size?: StyledSpacingDividerProps['size']
}>

const StyledSpacingDivider = styled.div<StyledSpacingDividerProps>`
  & {
    /* No background color for blank separator. */
    padding-top: ${({ size }) => {
      switch (size) {
        case SpacingDividerSize.LARGE:
          return space.xl
        case SpacingDividerSize.MEDIUM:
          return space.l
        case SpacingDividerSize.SMALL:
        default:
          return space.m
      }
    }};
  }
`

export const SpacingDivider = ({ size = SpacingDividerSize.SMALL }: SpacingDividerProps) => (
  <StyledSpacingDivider role="presentation" size={size} aria-hidden="true" />
)

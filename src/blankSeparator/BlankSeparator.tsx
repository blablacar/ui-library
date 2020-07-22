import React from 'react'
import styled from 'styled-components'

import { space } from '../_utils/branding'

export enum BlankSeparatorSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type StyledBlankSeparatorProps = Readonly<{
  size: BlankSeparatorSize
}>

export type BlankSeparatorProps = Readonly<{
  className?: string
  size?: StyledBlankSeparatorProps['size']
}>

const StyledBlankSeparator = styled.div<StyledBlankSeparatorProps>`
  & {
    /* No background color for blank separator. */
    padding-top: ${({ size }) => {
      switch (size) {
        case BlankSeparatorSize.LARGE:
          return space.xl
        case BlankSeparatorSize.MEDIUM:
          return space.l
        case BlankSeparatorSize.SMALL:
        default:
          return space.m
      }
    }};
  }
`

export const BlankSeparator = ({
  size = BlankSeparatorSize.SMALL,
  className,
}: BlankSeparatorProps) => (
  <StyledBlankSeparator size={size} className={className} aria-hidden="true" />
)

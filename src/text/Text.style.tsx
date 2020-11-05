import styled from 'styled-components'

import { color, font, fontWeight } from '../_utils/branding'
import { Text } from './Text'

export const StyledText = styled(Text)`
  & {
    margin: 0;
    font-weight: ${fontWeight.regular};
  }

  &.kirk-text-button {
    color: ${color.midnightGreen};
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
  }

  &.kirk-text-body,
  &.kirk-text-bodyStrong {
    color: ${color.lightMidnightGreen};
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
  }

  &.kirk-text-caption {
    color: ${color.lightMidnightGreen};
    font-size: ${font.s.size};
    line-height: ${font.s.lineHeight};
  }

  &.kirk-text-title,
  &.kirk-text-titleStrong {
    color: ${color.midnightGreen};
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
  }

  &.kirk-text-display2 {
    color: ${color.midnightGreen};
    font-size: ${font.xxl.size};
    line-height: ${font.xxl.lineHeight};
    font-weight: ${fontWeight.medium};
  }

  &.kirk-text-display1 {
    color: ${color.midnightGreen};
    font-size: ${font.xl.size};
    line-height: ${font.xl.lineHeight};
    font-weight: ${fontWeight.medium};
  }

  &.kirk-text-subheader,
  &.kirk-text-subheaderStrong {
    color: ${color.midnightGreen};
    font-size: ${font.l.size};
    line-height: ${font.l.lineHeight};
  }

  &.kirk-text-title,
  &.kirk-text-titleStrong {
    color: ${color.midnightGreen};
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
  }

  &.kirk-text-bodyStrong,
  &.kirk-text-subheaderStrong,
  &.kirk-text-titleStrong {
    font-weight: ${fontWeight.medium};
  }
`

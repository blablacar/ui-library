import styled from 'styled-components'

import { color, font, radius, space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

export const StyledWhyWrapper = styled.div`
  ${normalizeHorizontally};
`

export const StyledWhy = styled.button`
  padding: ${space.m} ${space.l} ${space.m} ${space.m};
  border: 1px solid ${color.gray};
  border-radius: ${radius.xl};
  display: inline-flex;
  align-items: center;
  font-size: ${font.base.size};
  cursor: pointer;
  color: ${color.lightMidnightGreen};
  background-color: ${color.white};
  -webkit-tap-highlight-color: ${color.tapHighlight};
  max-width: 100%;

  &:hover {
    background-color: ${color.lightGray};
  }

  :focus:not(.focus-visible) {
    outline: none;
  }

  /* Reset hover styles on devices not supporting hover state (e.g. touch devices). */
  @media (hover: none), (hover: on-demand) {
    &:hover {
      background-color: ${color.white};
    }
  }

  & > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: ${space.m};
  }
`

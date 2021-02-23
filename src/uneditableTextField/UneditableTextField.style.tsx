import styled from 'styled-components'

import { color, font, radius, space } from '../_utils/branding'
import { normalizeHorizontally, NormalizeProps } from '../layout/layoutNormalizer'

const inputHeight = '54px'

export const StyledUneditableContainer = styled.div<NormalizeProps>`
  ${normalizeHorizontally};
`

export const StyledUneditableTextField = styled.div`
  & {
    display: flex;
    align-items: center;
    min-height: ${inputHeight};
    padding: 0 ${space.l};
    background-color: ${color.lightGray};
    border-radius: ${radius.l};
    color: ${color.midnightGreen};
    font-size: ${font.base.size};
    line-height: ${inputHeight};
    text-decoration: none;
  }

  & .kirk-uneditableTextField-label:not(:first-child) {
    margin-left: ${space.l};
  }

  & .kirk-uneditableTextField-label--ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & .kirk-uneditableTextField-label--placeholder {
    color: ${color.lightMidnightGreen};
  }
`

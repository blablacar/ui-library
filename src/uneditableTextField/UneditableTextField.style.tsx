import React from 'react'
import cc from 'classcat'
import styled from 'styled-components'

import { color, font, radius, space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

const inputHeight = '54px'

export const StyledUneditableContainer = styled(({ componentType, className, ...props }) =>
  React.createElement(componentType, {
    className: cc(['kirk-uneditableTextField', className]),
    ...props,
  }),
)`
  ${normalizeHorizontally}
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

import styled from 'styled-components'

import { color, font, radius, space } from '../_utils/branding'

import uneditableTextField from './UneditableTextField'

const inputHeight = '54px'

const StyledUneditableTextField = styled(uneditableTextField)`
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

  & .kirk-icon {
    height: ${space.xl};
  }
`

export { UneditableTextFieldProps } from './UneditableTextField'
export default StyledUneditableTextField

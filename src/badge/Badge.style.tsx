import styled from 'styled-components'

import { color } from '../_utils/branding'

export const StyledBadge = styled.span`
  box-sizing: border-box;
  display: inline-block;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  border-radius: 18px;
  border: 1px solid ${color.white};
  background-color: ${color.red};
  color: ${color.white};
`

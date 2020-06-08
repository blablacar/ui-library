import styled from 'styled-components'

import { color, space } from '../_utils/branding'
import { Divider } from './Divider'

const StyledDivider = styled(Divider)`
  & {
    // Height is used instead of margins to prevent collapsing margin issues with other
    // margin-based components.
    height: calc(2 * ${space.m});
    position: relative;
  }

  &:after {
    position: absolute;
    top: ${space.m};
    content: ' ';
    border-top: solid ${color.lightGray} 1px;
    width: 100%;
  }
`

export { DividerProps } from './Divider'
export { StyledDivider as Divider }
export default StyledDivider

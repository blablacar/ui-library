import styled from 'styled-components'
import Divider from './Divider'
import { color, space } from '_utils/branding'

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
    border-top: solid ${color.divider} 1px;
    left: 0;
    right: 0;
  }
`
export default StyledDivider

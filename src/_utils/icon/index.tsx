import styled from 'styled-components'

import { shadow } from '_utils/branding'

import BaseIcon from './BaseIcon'

const StyledBaseIcon = styled(BaseIcon)`
  &.kirk-icon-wrapper {
    display: inline-block;
    position: relative;
  }

  &.kirk-icon-shadowed {
    border-radius: 50%;
    box-shadow: ${shadow.icon};
  }

  & .kirk-icon-badge {
    position: absolute;
    bottom: 12px;
    left: 12px;
  }
`

export default StyledBaseIcon

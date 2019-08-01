import styled from 'styled-components'

import BaseIcon from './BaseIcon'

const StyledBaseIcon = styled(BaseIcon)`
  &.kirk-icon-wrapper {
    display: inline-block;
    position: relative;
  }

  & .kirk-icon-badge {
    position: absolute;
    bottom: 12px;
    left: 12px;
  }
`

export default StyledBaseIcon

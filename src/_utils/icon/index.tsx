import styled from 'styled-components'

import { color, shadow } from '../branding'
import { BaseIcon } from './BaseIcon'

const StyledBaseIcon = styled(BaseIcon)`
  fill: ${props => props.iconColor ?? color.lightMidnightGreen};

  &,
  & rect,
  & circle,
  & line,
  & polyline,
  & path,
  & g {
    stroke: ${props => (props.isDisabled ? color.gray : '')};
  }

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

export * from './BaseIcon'

export { StyledBaseIcon as BaseIcon }

import styled from 'styled-components'

import { color, space } from '../_utils/branding'
import { DividerPosition } from './Breadcrumb'

export const StyledBreadcrumb = styled.ol<{
  divider: DividerPosition
}>`
  padding: ${props => {
    if (props.divider === DividerPosition.TOP) {
      return `${space.m} ${space.xl} ${space.l}`
    }
    if (props.divider === DividerPosition.BOTTOM) {
      return `${space.l} ${space.xl} ${space.m}`
    }

    return `${space.l} ${space.xl} ${space.l}`
  }};

  margin: 0;
  list-style: none;

  li {
    display: inline-block;
  }

  a {
    color: ${color.blue};
    text-decoration: none;
  }

  .breadcrumb-separator {
    display: inline-block;
    padding: 0 0.5em;
  }
`

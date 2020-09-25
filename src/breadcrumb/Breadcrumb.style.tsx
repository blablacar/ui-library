import styled from 'styled-components'

import { color, space } from '../_utils/branding'

export const StyledBreadcrumb = styled.ol`
  padding: ${space.l} ${space.xl} ${space.m};
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

import styled from 'styled-components'

import { color, space } from '../../_utils/branding'

export const Divider = styled.div`
  /* Using padding to avoid collapsing margins with above and below components */
  padding-top: ${space.m};
  padding-bottom: ${space.m};

  > hr {
    border: none;
    background-color: ${color.lightGray};
    height: 1px;
    margin: 0;
  }
`

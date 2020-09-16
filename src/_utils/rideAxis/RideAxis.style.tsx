import styled from 'styled-components'

import { ArrowIcon } from '../../icon'
import { space } from '../branding'

export const StyledRideAxis = styled.span``

export const StyledArrowIcon = styled(ArrowIcon)`
  /* increase specificity when inside any card */
  & {
    display: inline-block;
    /* hack: optical alignment since the icon isn't centered on the viewport */
    padding: 0.1em 0 0;
    margin: 0 ${space.m};
    height: 0.9em;
    width: 0.9em;
    flex-shrink: 0;
    flex-grow: 0;
  }
`

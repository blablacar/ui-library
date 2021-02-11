import styled from 'styled-components'

import { color, space, transition } from '../_utils/branding'
import { TextBody } from '../typography/body'

export const StyledHiddenStops = styled.li`
  min-height: 32px;

  ul {
    overflow: ${props => props['aria-expanded'] ? 'initial' : 'hidden'};
    height: ${props => props['aria-expanded'] ? `${props.stops * 32}px`: '0'};
    transition: height ${transition.duration.base} ease-in-out;
  }

  > div {
    display: ${props => props['aria-expanded'] ? 'none' : 'flex'};
  }
`

export const StyledWrapper = styled.div`
  display: flex;
`
export const StyledLabel = styled.div`
`

export const StyledStopsCount = styled(TextBody)`
  padding: ${space.m} 0;
  color: ${color.blue};
  cursor: pointer;
`

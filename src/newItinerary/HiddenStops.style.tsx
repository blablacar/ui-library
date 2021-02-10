import styled from 'styled-components'

import { color, space } from '../_utils/branding'
import { TextBody } from '../typography/body'

export const StyledHiddenStops = styled.li`
  min-height: 32px;
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

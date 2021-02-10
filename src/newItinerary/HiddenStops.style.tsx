import styled from 'styled-components'

import { color } from '../_utils/branding'
import { TextBody } from '../typography/body'

export const StyledHiddenStops = styled.li`
  min-height: 32px;
`

export const StyledWrapper = styled.div`
  display: flex;
`
export const StyledLabel = styled.div`
  padding-left: 8px;
`

export const StyledStopsCount = styled(TextBody)`
  color: ${color.blue};
  cursor: pointer;
`

import styled from 'styled-components'

import { color, space } from '../_utils/branding'
import { ChevronIcon } from '../icon/chevronIcon'
import { TextCaption } from '../typography/caption'

export const StyledContent = styled.div`
  flex: 1;
  padding: ${space.m} 0;
`

export const StyledLabel = styled.div`
  position: relative;
`

export const StyledSubLabel = styled(TextCaption)`
  display: block;
  color: ${color.midnightGreen};
  margin-top: ${space.s};
`

export const StyledProximity = styled.div`
  display: block;
`

export const StyledChevronIcon = styled(ChevronIcon)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`

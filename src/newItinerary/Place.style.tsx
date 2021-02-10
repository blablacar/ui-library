import styled from 'styled-components'

import { color, space } from '../_utils/branding'
import { TextCaption } from '../typography/caption'
import { ChevronIcon } from '../icon/chevronIcon'

export const StyledLabel = styled.div`
  position: relative;
  flex: 1;
  padding-left: 8px;
  padding-bottom: 16px;
`

export const StyledSubLabel = styled(TextCaption)`
  color: ${color.midnightGreen};
  margin-top: ${space.s};
`

export const StyledChevronIcon = styled(ChevronIcon)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`

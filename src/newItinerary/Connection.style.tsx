import styled from 'styled-components'

import { color } from '../_utils/branding'
import { TextCaption } from '../typography/caption'

export const StyledConnection = styled(TextCaption)`
  padding-left: 8px;
  color: ${color.lightMidnightGreen};
  display: flex;
  align-items: center;

  svg {
    margin-right: 6px;
  }
`

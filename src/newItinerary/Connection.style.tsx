import styled from 'styled-components'

import { color, space } from '../_utils/branding'
import { TextCaption } from '../typography/caption'

export const StyledConnection = styled(TextCaption)`
  padding: ${space.l} 0;
  color: ${color.lightMidnightGreen};
  display: flex;
  align-items: center;

  svg {
    margin-right: ${space.s};
  }
`

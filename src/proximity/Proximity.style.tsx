import styled from 'styled-components'

import { space } from '../_utils/branding'
import { TextCaption } from '../typography/caption'

export const StyledProximity = styled.div`
  display: flex;
  line-height: 0;
  align-items: center;
  padding-top: ${space.s};

  svg + svg {
    margin-left: ${space.s};
  }
`

export const StyledCaption = styled(TextCaption)<{ color: string }>`
  padding-left: ${space.s};
  color: ${props => props.color};
`

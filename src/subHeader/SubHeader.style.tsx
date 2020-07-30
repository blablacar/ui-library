import styled from 'styled-components'

import { font, space } from '../_utils/branding'
import { Title } from '../title'

export const StyledSubHeader = styled(Title)`
  font-size: ${font.l.size};
  line-height: ${font.l.lineHeight};
  padding-top: ${space.xl};
  padding-bottom: ${space.m};
  margin: 0;
`

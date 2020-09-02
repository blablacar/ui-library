import styled from 'styled-components'

import { responsiveBreakpoints, space } from '../../../_utils/branding'
import { TextDisplay1 } from '../../../typography/display1'

export const MediaContentTitle = styled(TextDisplay1)`
  margin-bottom: ${space.m};

  @media (${responsiveBreakpoints.isMediaSmall}) {
    margin-top: ${space.xl};
  }
`

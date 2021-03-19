import styled from 'styled-components'

import { space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'
import { TextSubHeaderStrong } from '../typography/subHeaderStrong'

export const StyledSubHeader = styled(TextSubHeaderStrong)`
  ${normalizeHorizontally};

  padding-top: ${space.xl};
  padding-bottom: ${space.m};
`

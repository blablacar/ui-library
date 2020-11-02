import styled from 'styled-components'

import { color, radius, space } from '../_utils/branding'

export const StyledMarketingMessage = styled.div`
  margin: 0;
  border: 1px solid ${color.lightGray};
  margin: 0 0 0 ${space.xxl};
  padding: ${space.m} ${space.l};
  border-radius: ${radius.l};
  border-top-left-radius: 0;
`

import styled from 'styled-components'
import { color, space, radius } from '_utils/branding'

import MarketingMessage from './MarketingMessage'

const StyledMarketingMessage = styled(MarketingMessage)`
  & {
    margin: 0;
    border: 1px solid ${color.divider};
    margin: 0 ${space.xxl};
    padding: ${space.m} ${space.l}
    border-radius: ${radius.l};
    border-top-left-radius: 0;
  }
`

export default StyledMarketingMessage

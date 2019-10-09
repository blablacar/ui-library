import styled from 'styled-components'
import { space } from '_utils/branding'

import MessagingSummaryItem from './MessagingSummaryItem'

const StyledMessagingSummaryItem = styled(MessagingSummaryItem)`
  /* Overrides horizontal paddings from item styles. */
  &.kirk-messaging-summary-item {
    padding-left: ${space.xl};
    padding-right: ${space.xl};
  }

  & .kirk-messaging-summary-item-sub-label {
    display: flex;
    align-items: center;
  }
`

export default StyledMessagingSummaryItem

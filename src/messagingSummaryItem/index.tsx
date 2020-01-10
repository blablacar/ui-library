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
    word-break: break-word;
    /* Truncate sublabel to max 2 lines. */
    max-height: 2.5em;
    overflow: hidden;
  }
`

export { MessagingSummaryItemProps } from './MessagingSummaryItem'
export default StyledMessagingSummaryItem

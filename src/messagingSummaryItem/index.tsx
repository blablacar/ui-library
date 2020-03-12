import styled from 'styled-components'

import MessagingSummaryItem from './MessagingSummaryItem'

const StyledMessagingSummaryItem = styled(MessagingSummaryItem)`
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

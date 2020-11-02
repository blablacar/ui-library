import styled from 'styled-components'

import { Item } from '../_internals/item'

export const StyledMessagingSummaryItem = styled(Item)`
  & .kirk-messaging-summary-item-sub-label {
    display: flex;
    word-break: break-word;

    /* Truncate sublabel to max 2 lines. */
    max-height: 2.5em;
    overflow: hidden;
  }
`

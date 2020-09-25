import styled from 'styled-components'

import { color, font } from '../_utils/branding'

export const StyledCaption = styled.div`
  font-size: ${font.s.size};
  line-height: ${font.s.lineHeight};
  color: ${color.lightMidnightGreen};
  display: flex;

  .kirk-button {
    display: inline;
  }

  .kirk-caption-time,
  .kirk-caption-secondary-content {
    flex: 1 0 auto;
  }

  .kirk-caption-secondary-content {
    text-align: right;
  }
`

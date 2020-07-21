import styled from 'styled-components'

import { HintBubble } from './HintBubble'

export const StyledHint = styled.div`
  & {
    position: relative;
  }

  & ${HintBubble} {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 2;
  }
  & ${HintBubble}.bubble-arrow--above {
    bottom: 100%;
  }
  & ${HintBubble}.bubble-arrow--below {
    top: 100%;
  }
`

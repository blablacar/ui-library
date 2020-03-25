import styled from 'styled-components'

import Hint from './Hint'
import HintBubble from './HintBubble'

const StyledHint = styled(Hint)`
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

export { HintProps } from './Hint'
export { HintBubblePosition } from './HintBubble'
export default StyledHint

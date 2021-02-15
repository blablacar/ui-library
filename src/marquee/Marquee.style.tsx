import styled from 'styled-components'

import { normalizeHorizontally, NormalizeProps } from '../layout/layoutNormalizer'

// Total animation duration:
// 3400ms fully visible + 320ms slideInOut
const animationDuration = 3720

export const StyledMarquee = styled.ul`
  position: relative;

  &:hover li {
    animation-play-state: paused;
  }
`

type MarqueeItemProps = NormalizeProps &
  Readonly<{
    position: number
    totalItems: number
  }>

export const StyledMarqueeItem = styled.li<MarqueeItemProps>`
  /* animation steps defined by how many items are passed */
  @keyframes slideInOutWait {
    0% {
      left: 50%;
    }

    /* fully visible starting at 160ms */
    ${props => `${5.8125 / props.totalItems}%`} {
      left: 0;
      opacity: 1;
    }

    /* stays visible until 160ms before the end */
    ${props => `${94.1875 / props.totalItems}%`} {
      left: 0;
      opacity: 1;
    }

    /* end of animation, entering waiting queue */
    ${props => `${100 / props.totalItems}%`} {
      left: -50%;
      opacity: 0;
    }

    100% {
      left: -50%;
    }
  }

  /* first item is relative to set a proper height */
  position: ${props => (props.position === 0 ? 'relative' : 'absolute')};
  top: 0;
  left: 0;
  opacity: 0;
  animation-name: slideInOutWait;
  animation-duration: ${props => `${animationDuration * props.totalItems}ms`};
  animation-iteration-count: infinite;
  animation-delay: ${props => `${animationDuration * props.position}ms`};
  width: 100%;
  ${normalizeHorizontally};
`

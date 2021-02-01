import styled from 'styled-components'

// Total animation duration:
// 3400ms fully visible + 320ms fadeInOut
const animationDuration = 3720

export const StyledShowcase = styled.ul`
  position: relative;
`

export const StyledShowcaseItem = styled.li<{
  delay: number
  totalItems: number
}>`
  /* animation steps defined by how many items are passed */
  @keyframes fadeInOutWait {
    0% {
      opacity: 0;
    }

    /* fully visible starting at 160ms */
    ${props => `${5.8125 / props.totalItems}%`} {
      opacity: 1;
    }

    /* stays visible until 160ms before the end */
    ${props => `${94.1875 / props.totalItems}%`} {
      opacity: 1;
    }

    /* end of animation, entering waiting queue */
    ${props => `${100 / props.totalItems}%`} {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  animation-name: fadeInOutWait;
  animation-duration: ${props => `${animationDuration * props.totalItems}ms`};
  animation-iteration-count: infinite;
  animation-delay: ${props => `${animationDuration * props.delay}ms`};
`

import styled from 'styled-components'

import { color } from '../_utils/branding'

export const StyledFogContainer = styled.div`
  position: relative;
`

type FogProps = {
  $isLoading?: boolean
}

const transitionDelay = '420ms'
const transitionTimingFunction = 'ease-in-out'

export const StyledFog = styled.div<FogProps>`
  position: absolute;
  background: ${color.white};
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: ${props => (props.$isLoading ? 0.64 : 0)};
  visibility: ${props => (props.$isLoading ? '' : 'hidden')};
  transition: opacity ${transitionDelay} ${transitionTimingFunction},
    visibility ${transitionDelay} ${transitionTimingFunction};
`

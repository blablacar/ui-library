import styled from 'styled-components'
import { overlayBaseStyle } from 'searchForm/baseStyles'

import StepperOverlay from './StepperOverlay'

const StyledStepperOverlay = styled(StepperOverlay)`
  & {
    ${overlayBaseStyle}
  }
`

export default StyledStepperOverlay

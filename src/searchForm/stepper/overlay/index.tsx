import styled from 'styled-components'

import { overlayBaseStyle } from '../../../searchForm/baseStyles'
import { TRANSITION_OVERLAY_CLASS_NAME } from '../../transitionConfig'
import StepperOverlay from './StepperOverlay'

export const positionDateStepper = '460px'
export const positionInitial = '648px'

const StyledStepperOverlay = styled(StepperOverlay)`
  & {
    ${overlayBaseStyle}
    position: absolute;
  }

  &.${TRANSITION_OVERLAY_CLASS_NAME}-enter {
    left: ${positionInitial};
  }

  &.${TRANSITION_OVERLAY_CLASS_NAME}-enter-active, &.${TRANSITION_OVERLAY_CLASS_NAME}-enter-done {
    left: ${positionDateStepper};
  }

  &.${TRANSITION_OVERLAY_CLASS_NAME}-exit {
    left: ${positionDateStepper};
  }
`

export default StyledStepperOverlay

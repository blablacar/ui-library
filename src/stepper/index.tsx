import styled from 'styled-components'
import { color, space } from '_utils/branding'
import Stepper, { StepperDisplay, StepperButtonSize } from './Stepper'

const StyledStepper = styled(Stepper)`
  & {
    display: flex;
    position: relative;
  }

  & button {
    flex-shrink: 0;
  }

  & .kirk-stepper-value {
    display: inline;
    padding: 0 ${space.l};
    margin: 0;
    border: none;
    color: ${color.primaryText};
    text-align: center;
    flex-grow: 1;
    align-self: center;
  }

  & .kirk-stepper-decrement,
  & .kirk-stepper-increment {
    align-self: center;
    border: none;
  }

  &.kirk-stepper-large .kirk-stepper-value {
    width: calc(100% - ${StepperButtonSize[StepperDisplay.LARGE]}px * 2);
    flex-grow: 0;
  }
`

export { StepperDisplay, StepperProps } from './Stepper'
export default StyledStepper

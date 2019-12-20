import styled from 'styled-components'
import { color, space } from '_utils/branding'
import Stepper, { StepperDisplay, StepperButtonSize } from './Stepper'

const StyledStepper = styled(Stepper)`
  & {
    display: flex;
  }

  & button {
    flex-shrink: 0;
  }

  & label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
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

  & div .kirk-stepper-decrement,
  & div .kirk-stepper-increment {
    min-width: 24px;
  }

  &.kirk-stepper-large .kirk-stepper-value {
    width: calc(100% - ${StepperButtonSize[StepperDisplay.LARGE]}px * 2);
    flex-grow: 0;
  }
`

export { StepperDisplay } from './Stepper'
export default StyledStepper

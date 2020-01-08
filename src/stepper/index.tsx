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

  /* https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/ */
  & .kirk-stepper-range {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
    border: transparent;
  }

  & input[type='range'].kirk-stepper-range::-webkit-slider-thumb,
  & input[type='range'].kirk-stepper-range::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  & input[type='range'].kirk-stepper-range::-moz-range-thumb {
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  & .kirk-stepper-range::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
`

export { StepperDisplay } from './Stepper'
export default StyledStepper

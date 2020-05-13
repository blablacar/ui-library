import styled from 'styled-components'

import { color, space } from '../_utils/branding'

import Stepper, { StepperButtonSize, StepperDisplay } from './Stepper'

// These components have a 12px vertical padding. We probably took a shortcut when creating our
// sizes, as we should have handled 4px multiples (checked with @wakooka)
const betweenMandL = '12px'

const StyledStepper = styled(Stepper)`
  & {
    display: flex;
    position: relative;
  }

  & .kirk-stepper-content {
    display: flex;
    position: relative;
    flex: 1;
  }

  & .kirk-stepper-left-addon {
    // Vertical align the addon
    display: flex;
    align-items: center;

    // Addon is expending, while stepper has a fixed size
    flex: 1;
  }

  & .kirk-stepper-left-addon + .kirk-stepper-content {
    flex: 0;
  }

  & .kirk-stepper-value {
    display: inline;
    padding: 0 ${space.l};
    margin: 0;
    border: none;
    color: ${color.midnightGreen};
    text-align: center;
    flex-grow: 1;
    align-self: center;
  }

  & .kirk-stepper-decrement,
  & .kirk-stepper-increment {
    flex-shrink: 0;
    align-self: center;
    border: none;
  }

  &.kirk-stepper-small {
    padding: ${betweenMandL} 0;
  }

  &.kirk-stepper-large .kirk-stepper-value {
    width: calc(100% - ${StepperButtonSize[StepperDisplay.LARGE]}px * 2);
    flex-grow: 0;
  }

  // Don't add the itinerary arrival padding to the one we handle with the Stepper
  & .kirk-stepper-left-addon .kirk-itineraryLocation--arrival .kirk-itineraryLocation-label {
    padding-bottom: 0;
  }
`

export { StepperDisplay, StepperProps } from './Stepper'
export default StyledStepper

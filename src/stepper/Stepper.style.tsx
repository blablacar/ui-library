import styled from 'styled-components'

import { space } from '../_utils/branding'
import { normalizeHorizontally, NormalizeProps } from '../layout/layoutNormalizer'
import { StepperButtonSize, StepperDisplay } from './constants'

// These components have a 12px vertical padding. We probably took a shortcut when creating our
// sizes, as we should have handled 4px multiples (checked with @wakooka)
const betweenMandL = '12px'

export const StyledStepper = styled.div<NormalizeProps & { valueColor: string }>`
  ${normalizeHorizontally};
  display: flex;
  position: relative;

  & .kirk-stepper-content {
    display: flex;
    position: relative;
    flex: 1;
  }

  & .kirk-stepper-value {
    display: inline;
    padding: 0 ${space.l};
    margin: 0;
    border: none;
    color: ${props => props.valueColor};
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
`

export const StyledAddon = styled.div<{ fixNormalization: boolean }>`
  // Vertical align the addon
  display: flex;
  align-items: center;

  // Addon is expending, while stepper has a fixed size
  flex: 1;
  & + .kirk-stepper-content {
    flex: 0;
  }

  // Left addon can be a normalized component (with 24px horizontal padding). Let's counter it.
  margin-left: ${props => (props.fixNormalization ? `-${space.xl}` : 0)};
`

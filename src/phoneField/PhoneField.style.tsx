import styled from 'styled-components'

import { color, inputBorderSize, radius, selectHeight, space, transition } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

export const StyledPhoneField = styled.div`
  & .kirk-phoneField-wrapper--inline {
    ${normalizeHorizontally};
    margin-top: ${space.m};
    margin-bottom: ${space.m};
  }

  & .kirk-phoneField-wrapper--inline .kirk-phoneField-wrapper--background {
    display: flex;
    border-radius: ${radius.l};
    background-color: ${color.lightGray};
  }

  &
    .kirk-phoneField-wrapper--inline.kirk-phoneField-wrapper--hasFocus
    .kirk-phoneField-wrapper--background {
    border: ${inputBorderSize.focus} solid ${color.blue};
  }

  &
    .kirk-phoneField-wrapper--inline.kirk-phoneField-wrapper--hasFocus
    .kirk-phoneField-wrapper--background
    .kirk-selectField
    select {
    height: calc(${selectHeight} - ${inputBorderSize.focus} * 2);
  }

  &
    .kirk-phoneField-wrapper--inline.kirk-phoneField-wrapper--hasFocus
    .kirk-textField-wrapper
    input {
    padding-top: calc(${space.l} - ${inputBorderSize.focus});
    padding-bottom: calc(${space.l} - ${inputBorderSize.focus});
  }

  & .kirk-phoneField-wrapper--inline .kirk-selectField,
  & .kirk-phoneField-wrapper--inline .kirk-textField {
    flex: 1;
    padding: 0 !important; // Counters normalization
  }

  & .kirk-phoneField-wrapper--inline .kirk-selectField {
    flex-grow: 1;
  }

  & .kirk-phoneField-wrapper--inline .kirk-textField {
    flex-grow: 2;
  }

  & .kirk-phoneField-wrapper--inline .kirk-textField input {
    padding-left: 0 !important;
  }

  &.kirk-error .kirk-phoneField-wrapper--inline .kirk-phoneField-wrapper--background {
    background: ${color.lightRed};
    animation: phoneFieldError ${transition.duration.fast} ease-in-out;
  }

  &.kirk-error .kirk-selectField-background,
  &.kirk-error .kirk-selectField-background .kirk-icon,
  &.kirk-error .kirk-textField-wrapper,
  &.kirk-error input {
    background: ${color.lightRed};
    border-color: ${color.lightRed};
  }

  &.kirk-error .kirk-error-message {
    color: ${color.red};
    display: block;
    padding-right: calc(${space.m} + ${space.xl});
    padding-left: calc(${space.m} + ${space.xl});
    padding-bottom: ${space.m};
  }

  @keyframes phoneFieldError {
    20% {
      margin-left: -10px;
      margin-right: 10px;
    }
    40% {
      margin-left: 10px;
      margin-right: -10px;
    }
    60% {
      margin-left: -5px;
      margin-right: 5px;
    }
    80% {
      margin-left: 5px;
      margin-right: -5px;
    }
    100% {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`

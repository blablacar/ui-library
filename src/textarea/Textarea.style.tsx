import styled from 'styled-components'

import {
  color,
  componentSizes,
  font,
  inputBorderSize,
  radius,
  space,
  transition,
} from '../_utils/branding'

export const StyledTextarea = styled.div`
  & {
    position: relative;
    box-sizing: border-box;
  }

  & .kirk-textarea-wrapper {
    position: relative;
    display: flex;
    box-sizing: border-box;
    color: ${color.midnightGreen};
    background-color: ${color.lightGray};
    border-radius: ${radius.l};
    border: solid ${inputBorderSize.focus} transparent;
  }

  & .kirk-textarea-wrapper.kirk-textarea-wrapper--hasFocus {
    border-color: ${color.blue};
  }

  & textarea {
    outline: none;
    appearance: none;
    border: 0;
    background-color: ${color.lightGray};
    color: ${color.midnightGreen};
    flex: 1;
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
    width: 100%;
    caret-color: ${color.blue};
    padding: 0 calc(${space.l} + 1px - ${inputBorderSize.focus});
    margin: calc(${space.l} + 1px - ${inputBorderSize.focus}) 0;
    box-sizing: content-box;
    height: ${font.base.lineHeight};
    scrollbar-width: thin;
  }

  & textarea.kirk-textarea-hasButton {
    /* Ensure the content of the textarea is not overlapped by the button. */
    padding-right: calc(${space.s} + ${componentSizes.buttonIconSize});
  }

  & textarea:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: 0;
  }

  & textarea::placeholder {
    color: ${color.lightMidnightGreen};
  }

  & textarea {
    min-height: 150px;
  }

  & textarea.kirk-textarea-fitContent {
    min-height: ${font.base.lineHeight};
    resize: none;
  }

  &.kirk-error .kirk-textarea-wrapper {
    background: ${color.lightRed};
    border: solid 1px ${color.lightRed};
    animation: textFieldError ${transition.duration.fast} ease-in-out;
  }

  &.kirk-error textarea {
    background-color: ${color.lightRed};
  }

  &.kirk-error .kirk-error-message {
    color: ${color.red};
    display: block;
    padding: ${space.m};
  }

  & label {
    color: ${color.midnightGreen};
    padding: 0 ${space.m} ${space.s} ${space.m};
  }

  & .kirk-button {
    background-color: transparent;
    color: ${color.lightMidnightGreen};
  }

  & .kirk-textarea-button {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &.kirk-disabled {
    opacity: 0.5;
    cursor: default;
  }

  @keyframes textFieldError {
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

import styled from 'styled-components'
import {
    color,
    space,
    font,
    radius,
    transition,
    inputBorderSize,
    componentSizes,
} from '_utils/branding'

import Textarea from './Textarea'

const StyledTextarea = styled(Textarea)`
  & {
    position: relative;
    box-sizing: border-box;
  }

  & .kirk-textarea-wrapper { 
    position: relative;
    display: flex;
    box-sizing: border-box;
    color: ${color.primaryText};
    background-color: ${color.inputBackground};
    border-radius: ${radius.l};
    border: solid ${inputBorderSize.focus} transparent;
  }

  & .kirk-textarea-wrapper.kirk-textarea-wrapper--hasFocus {
    border-color: ${color.inputBorderFocus};
  }

  & textarea {
    outline: none;
    appearance: none;
    border: 0;
    border-radius: ${radius.l};
    background-color: ${color.inputBackground};
    color: ${color.primaryText};
    flex: 1;
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
    width: 100%;
    caret-color: ${color.inputCaret};
    padding: calc(${space.l} + 1px - ${inputBorderSize.focus});
    box-sizing: content-box;
    height: ${font.base.lineHeight};
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
    color: ${color.inputPlaceholder};
  }

  & textarea {
    min-height: 150px;
  }

  & textarea.kirk-textarea-fitContent {
    min-height: ${font.base.lineHeight};
    resize: none;
  }

  &.kirk-error .kirk-textarea-wrapper {
    background: ${color.inputError};
    border: solid 1px ${color.inputError};
    animation: textFieldError ${transition.duration.fast} ease-in-out;
  }

  &.kirk-error textarea {
    background-color: ${color.inputError};
  }

  &.kirk-error .kirk-error-message {
    color: ${color.danger};
    display: block;
    padding: ${space.m};
  }

  & label {
    color: ${color.primaryText};
    padding: 0 ${space.m} ${space.s} ${space.m};
  }

  & .kirk-button {
    background-color: transparent;
    color: ${color.secondaryText};
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

export default StyledTextarea

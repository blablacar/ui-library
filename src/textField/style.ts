import css from 'styled-jsx/css'
import { color, space, font, radius, transition } from '_utils/branding'

export default css`
  .kirk-textField {
    position: relative;
    box-sizing: border-box;
  }

  .kirk-textField-wrapper {
    position: relative;
    display: flex;
    box-sizing: border-box;
    color: ${color.primaryText};
    background-color: ${color.inputBackground};
    border-radius: ${radius.l};
    border: solid 1px ${color.inputBorder};
    box-shadow: none;
  }

  .kirk-textField input,
  .kirk-textField textarea {
    appearance: none;
    border: 0;
    border-radius: ${radius.l};
    background-color: ${color.inputBackground};
    color: ${color.primaryText};
    flex: 1;
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
    width: 100%;
  }

  .kirk-textField textarea {
    padding: ${space.l};
  }

  .kirk-textField input {
    padding: ${space.l} 0 ${space.l} ${space.l};
    /*
    Use margin-right instead of padding-right to fix a cursor bug
    when calling setSelectionRange on Safari Mobile [BBCSPA-1030]
    */
    margin-right: 48px;
  }

  .kirk-textField input:not(:first-child),
  .kirk-textField textarea:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: 0;
  }

  .kirk-textField input::placeholder,
  .kirk-textField textarea::placeholder {
    color: ${color.inputPlaceholder};
  }

  .kirk-textField input::-ms-clear {
      display: none;
  }

  .kirk-textField input[type="number"]::-webkit-outer-spin-button,
  .kirk-textField input[type="number"]::-webkit-inner-spin-button {
     -webkit-appearance: none;
  }

  .kirk-textField input[type="number"] {
     -moz-appearance: textfield;
     -webkit-appearance: none;
  }

  .kirk-textField input[type="search"] {
    width: 100%;
    box-sizing: border-box;
  }

  .kirk-textField input[type="number"],
  .kirk-textField input[type="search"] {
    box-shadow: none;
  }

  .kirk-textField input:disabled {
    color: ${color.disabled};
  }

  .kirk-textField textarea {
    min-height: 150px;
  }

  .kirk-textField textarea:disabled {
    color: ${color.disabled};
  }

  .kirk-textField input:focus,
  .kirk-textField textarea:focus {
    border-color: ${color.inputBorder};
    box-shadow: none;
    outline: none;
  }

  .kirk-error .kirk-textField-wrapper {
    background: ${color.inputError};
    border: solid 1px ${color.inputError};
    animation: textFieldError ${transition.duration.fast} ease-in-out;
  }

  .kirk-error input,
  .kirk-error textarea {
    background-color: ${color.inputError};
  }

  :global(.kirk-error .kirk-error-message) {
    color: ${color.danger};
    display: block;
    padding: ${space.m};
  }

  .kirk-textField label {
    color: ${color.primaryText};
    padding: 0 ${space.m} ${space.s} ${space.m};
  }

  :global(.kirk-textField .kirk-button) {
    background-color: transparent;
    color: ${color.secondaryText};
    height: auto;
  }

  :global(.kirk-textField .kirk-textField-button) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }

  :global(.kirk-textField .kirk-textField-button[hidden]) {
    /* We use visiblity hidden instead of display none to resolve a display glitch
    on Safari Mobile when clearing input value and hiding button simultaneously */
    visibility: hidden;
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

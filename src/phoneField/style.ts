import css from 'styled-jsx/css'
import { color, radius, space, inputBorderSize, transition } from '_utils/branding'
import { selectHeight } from 'selectField/SelectField'

export default css`
  :global(.kirk-phoneField-wrapper--inline) {
    display: flex;
    border-radius: ${radius.l};
    background-color: ${color.inputBackground};
  }

  :global(.kirk-phoneField-wrapper--inline.kirk-phoneField-wrapper--hasFocus) {
    border: ${inputBorderSize.focus} solid ${color.inputBorderFocus};
  }

  :global(.kirk-phoneField-wrapper--inline.kirk-phoneField-wrapper--hasFocus
      .kirk-selectField
      select) {
    height: calc(${selectHeight} - ${inputBorderSize.focus} * 2);
  }

  :global(.kirk-phoneField-wrapper--inline.kirk-phoneField-wrapper--hasFocus
      .kirk-textField-wrapper
      input) {
    padding-top: calc(${space.l} - ${inputBorderSize.focus});
    padding-bottom: calc(${space.l} - ${inputBorderSize.focus});
  }

  :global(.kirk-phoneField-wrapper--inline .kirk-selectField),
  :global(.kirk-phoneField-wrapper--inline .kirk-textField) {
    flex: 1;
  }

  :global(.kirk-phoneField-wrapper--inline .kirk-selectField) {
    flex-grow: 1;
  }

  :global(.kirk-phoneField-wrapper--inline .kirk-textField) {
    flex-grow: 2;
  }

  :global(.kirk-phoneField-wrapper--inline .kirk-textField input) {
    padding-left: 0 !important;
  }

  :global(.kirk-phoneField-wrapper .kirk-textField) {
    margin-top: ${space.l};
  }

  :global(.kirk-error .kirk-phoneField-wrapper--inline) {
    background: ${color.inputError};
    animation: phoneFieldError ${transition.duration.fast} ease-in-out;
  }

  :global(.kirk-error .kirk-selectField),
  :global(.kirk-error .kirk-selectField .kirk-icon),
  :global(.kirk-error .kirk-textField-wrapper),
  :global(.kirk-error .kirk-textField .kirk-textField-wrapper input) {
    background: ${color.inputError};
    border-color: ${color.inputError};
  }

  :global(.kirk-error .kirk-error-message) {
    color: ${color.danger};
    display: block;
    padding: ${space.m};
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

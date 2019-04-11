import css from 'styled-jsx/css'
import { color, radius, space, inputBorderSize } from '_utils/branding'
import { selectHeight } from 'selectField/style'

export default css`
  :global(.kirk-phoneField--inline) {
    display: flex;
    border-radius: ${radius.l};
    background-color: ${color.inputBackground};
  }

  :global(.kirk-phoneField--inline.kirk-phoneField--hasFocus) {
    border: ${inputBorderSize.focus} solid ${color.inputBorderFocus};
  }

  :global(.kirk-phoneField--inline.kirk-phoneField--hasFocus .kirk-selectField select) {
    height: calc(${selectHeight} - ${inputBorderSize.focus} * 2);
  }

  :global(.kirk-phoneField--inline.kirk-phoneField--hasFocus .kirk-textField-wrapper input) {
    padding-top: calc(${space.l} - ${inputBorderSize.focus});
    padding-bottom: calc(${space.l} - ${inputBorderSize.focus});
  }

  :global(.kirk-phoneField--inline .kirk-selectField),
  :global(.kirk-phoneField--inline .kirk-textField) {
    flex: 1;
  }

  :global(.kirk-phoneField--inline .kirk-selectField) {
    flex-grow: 1;
  }

  :global(.kirk-phoneField--inline .kirk-textField) {
    flex-grow: 2;
  }

  :global(.kirk-phoneField--inline .kirk-textField input) {
    padding-left: 0 !important;
  }

  :global(.kirk-phoneField .kirk-textField) {
    margin-top: ${space.l};
  }
`

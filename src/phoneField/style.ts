import css from 'styled-jsx/css'
import { color, radius, space } from '_utils/branding'

export default css`
  :global(.kirk-phoneField--inline) {
    display: flex;
    border-radius: ${radius.l};
    background-color: ${color.inputBackground};
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

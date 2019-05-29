import css from 'styled-jsx/css'

import { space } from '_utils/branding'

export default css`
  .kirk-button-group {
    display: flex;
  }

  .kirk-button-group.kirk-button-group-column {
    flex-direction: column;
  }
  .kirk-button-group.kirk-button-group-column :global(.kirk-button) {
    justify-content: center;
  }
  .kirk-button-group.kirk-button-group-column > :global(.kirk-button + .kirk-button) {
    margin-top: ${space.m};
  }
  .kirk-button-group.kirk-button-group-column > :global(.kirk-button.kirk-button-loading) {
    margin-left: auto;
    margin-right: auto;
  }

  .kirk-button-group.kirk-button-group-column.kirk-button-group-reverse {
    flex-direction: column-reverse;
  }
  .kirk-button-group.kirk-button-group-column.kirk-button-group-reverse
    > :global(.kirk-button + .kirk-button) {
    margin-bottom: ${space.m};
    margin-top: 0;
  }

  .kirk-button-group.kirk-button-group-row {
    flex-direction: row;
    justify-content: space-between;
  }
  .kirk-button-group.kirk-button-group-row > :global(.kirk-button) {
    flex-grow: 1;
    justify-content: center;
  }
  .kirk-button-group.kirk-button-group-row > :global(.kirk-button + .kirk-button) {
    margin-left: ${space.l};
  }

  .kirk-button-group.kirk-button-group-row.kirk-button-group-reverse {
    flex-direction: row-reverse;
  }
  .kirk-button-group.kirk-button-group-row.kirk-button-group-reverse
    > :global(.kirk-button + .kirk-button) {
    margin-right: ${space.l};
    margin-left: 0;
  }
`

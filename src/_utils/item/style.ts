import css from 'styled-jsx/css'

import { color, space } from '_utils/branding'

export default css`
  :global(.kirk-item) {
    position: relative;
    display: flex;
    padding: 0;
    padding-top: ${space.l};
    padding-bottom: ${space.l};
    align-items: center;
    flex: 1;
    border: 0;
    background-color: ${color.white}
  }

  :global(a.kirk-item) {
    cursor: pointer;
    background: none;
    text-decoration: none;
    user-select: none;
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;
  }

  /* Button tag fixes */
  :global(button.kirk-item) {
    cursor: pointer;
    text-align: left;
    width: 100%;
    font-family: inherit;
    outline: none;
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;
  }

  /* Text areas */
  .kirk-item-leftText {
    flex: 1;
  }

  .kirk-item-rightText {
    margin-left: ${space.l};
    text-align: right;
  }

  /* Text */
  :global(.kirk-item-title) {
    margin-bottom: ${space.s};
  }

  /* Addons */
  :global(.kirk-item-leftAddon),
  :global(.kirk-item-rightAddon),
  :global(kirk-item-chevron) {
    display: inline-flex;
    min-width: 24px;
    align-items: center;
  }

  :global(.kirk-item-leftAddon) {
    margin-right: ${space.l};
  }

  :global(.kirk-item-rightAddon),
  :global(kirk-item-chevron) {
    margin-left: ${space.l};
  }
`

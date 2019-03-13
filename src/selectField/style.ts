import css from 'styled-jsx/css'
import { color, space, font, radius } from '_utils/branding'

export default css`
  :global(.kirk-selectField) {
    display: block;
    position: relative;
    width: 100%;
    padding: 0 ${space.l};
    box-sizing: border-box;
    color: ${color.primaryText};
    background-color: ${color.inputBackground};
    border-radius: ${radius.l};
    border: solid 1px ${color.inputBorder};
    box-shadow: none;
  }

  :global(.kirk-selectField select) {
    display: block;
    position: relative;
    width: 100%;
    height: calc(${space.l} * 2 + ${font.base.lineHeight});
    margin: 0;
    padding: 0;
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
    color: ${color.primaryText};
    box-shadow: none;
    background: transparent;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: none;
    cursor: pointer;
    z-index: 1;
  }

  /* Remove native select arrow on Internet Explorer 10 and 11  */
  :global(.kirk-selectField select::-ms-expand) {
    display: none;
  }

  :global(.kirk-selectField select:focus) {
    outline: none;
  }

  :global(.kirk-selectField .kirk-icon) {
    position: absolute;
    top: ${space.l};
    right: ${space.m};
    background: ${color.inputBackground};
  }
`

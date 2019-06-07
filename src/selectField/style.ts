import css from 'styled-jsx/css'
import { color, space, font, radius, inputBorderSize } from '_utils/branding'

export const selectHeight = '52px'

export default css`
  :global(.kirk-selectField) {
    display: block;
    position: relative;
    width: 100%;
    padding: 0 0 0 ${space.l};
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
    height: ${selectHeight};
    margin: 0;
    padding: 0 calc(${space.m} + ${space.xl}) 0 0;
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
    top: 0;
    bottom: 0;
    margin: auto;
    right: ${space.m};
    background: ${color.inputBackground};
    z-index: 0;
  }

  :global(.kirk-selectField--hasFocus) {
    border: ${inputBorderSize.focus} solid ${color.inputBorderFocus};
  }

  :global(.kirk-selectField--hasFocus select) {
    height: calc(${selectHeight} - ${inputBorderSize.default} - ${inputBorderSize.focus});
  }
`

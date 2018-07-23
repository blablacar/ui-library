import css from 'styled-jsx/css'
import { color, radius, space, font } from '_utils/branding'

const inputHeight = '54px'

export default css`
  :global(.uneditableTextField) {
    display: flex;
    align-items: center;
    min-height: ${inputHeight};
    padding: 0 ${space.l};
    background-color: ${color.inputBackground};
    border-radius: ${radius.l};
    color: ${color.primaryText};
    font-size: ${font.base.size};
    line-height: ${inputHeight};
    text-decoration: none;
  }

  .uneditableTextField-label:not(:first-child) {
    margin-left: ${space.l};
  }

  .uneditableTextField-label--ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  :global(.uneditableTextField .kirk-icon) {
    height: ${space.xl};
  }
`

import css from 'styled-jsx/css'
import { color, radius, space, font } from '_utils/branding'

export default css`
  :global(.uneditableTextField) {
    display: flex;
    align-items: center;
    min-height: 54px;
    padding: ${space.m} ${space.l};
    background-color: ${color.inputBackground};
    border-radius: ${radius.l};
    color: ${color.primaryText};
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
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
`

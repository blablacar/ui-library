import css from 'styled-jsx/css'
import { color, space } from '_utils/branding'

export default css`
  ul {
    position: relative;
    display: block;
    list-style: none;
    border-radius: 4px;
    padding-top: ${space.m};
    padding-bottom: ${space.m};
    background-color: ${color.white};
  }
`

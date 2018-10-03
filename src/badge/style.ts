import css from 'styled-jsx/css'

import { color } from '_utils/branding'

export default css`
  .kirk-badge {
    box-sizing: border-box;
    display: inline-block;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    text-align: center;
    border-radius: 18px;
    border: 1px solid ${color.white};
    background-color: ${color.danger};
    color: ${color.white};
  }
`

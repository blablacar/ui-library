import css from 'styled-jsx/css'
import { color, space } from '_utils/branding'

export default css`
  .kirk-rating {
    display: flex;
    align-items: center;
  }

  .kirk-rating span {
    color: ${color.secondaryText};
    margin-left: ${space.s};
  }
`

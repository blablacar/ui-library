import css from 'styled-jsx/css'
import { color } from '_utils/branding'

export default css`
  div {
    border: 2px dashed ${color.border};
    box-sizing: border-box;
    border-radius: 50%;
    position: relative;
    width: 48px;
    height: 48px;
  }

  .kirk-medium {
    height: 96px;
    width: 96px;
  }

  .kirk-large {
    height: 156px;
    width: 156px;
  }

  .kirk-image {
    border: none;
  }

  img {
    border-radius: 50%;
    height: 100%;
  }

  .kirk-idCheck {
    bottom: -3px;
    right: -3px;
    position: absolute;
    width: 18px;
  }

   .kirk-medium .kirk-idCheck {
    width: 24px;
  }

  .kirk-large .kirk-idCheck {
    width: 36px;
  }
`

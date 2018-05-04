import css from 'styled-jsx/css'
import { color, font, space } from '_utils/branding'

export default css`
  .kirk-profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${space.l} ${space.xl};
  }

  .kirk-title {
    color: ${color.primaryText};
    margin-top: 0;
    margin-bottom: ${space.m};
  }

  .kirk--medium .kirk-title {
    font-size: ${font.xl.size};
  }

  .kirk-ratings {
    display: flex;
    align-items: center;
  }

  .kirk-ratings div:nth-of-type(2) {
    margin-left: ${space.s};
  }

  .kirk-secondaryInfo {
    color: ${color.secondaryText};
    display: block;
  }
`

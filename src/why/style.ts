import css from 'styled-jsx/css'
import { color, space, font, radius } from '_utils/branding'

export default css`
  .kirk-why {
    padding: ${space.m} ${space.l} ${space.m} ${space.m};
    border: 1px solid ${color.border};
    border-radius: ${radius.xl};
    display: inline-flex;
    align-items: center;
    font-size: ${font.base.size};
    cursor: pointer;
    color: ${color.secondaryText};
    background-color: ${color.white};
    -webkit-tap-highlight-color: ${color.tapHighlight};
  }

  .kirk-why:hover {
    background-color: ${color.lightBackground};
  }

  /* Reset hover styles on devices not supporting hover state (e.g. touch devices). */
  @media (hover:none), (hover:on-demand) {
    .kirk-why:hover {
      background-color: ${color.white};
    }
  }

  .kirk-why > span {
    max-width: 100vh;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: ${space.m};
  }
`

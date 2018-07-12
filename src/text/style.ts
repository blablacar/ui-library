import css from 'styled-jsx/css'
import { color, font, fontWeight } from '_utils/branding'

export default css`
  .kirk-text {
    margin: 0;
    font-weight: ${fontWeight.regular};
  }

  .kirk-text.kirk-text-button {
    color: ${color.primaryText};
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
  }

  .kirk-text-body,
  .kirk-text-bodyStrong {
    color: ${color.secondaryText};
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
  }

  .kirk-text-caption {
    color: ${color.secondaryText};
    font-size: ${font.s.size};
    line-height: ${font.s.lineHeight};
  }

  .kirk-text-display1 {
    color: ${color.primaryText};
    font-size: ${font.xxl.size};
    line-height: ${font.xxl.lineHeight};
  }

  .kirk-text-display2 {
    color: ${color.primaryText};
    font-size: ${font.xl.size};
    line-height: ${font.xl.lineHeight};
  }

  .kirk-text-subheader,
  .kirk-text-subheaderStrong {
    color: ${color.primaryText};
    font-size: ${font.l.size};
    line-height: ${font.l.lineHeight};
  }

  .kirk-text-bodyStrong,
  .kirk-text-subheaderStrong {
    font-weight: ${fontWeight.medium};
  }
`

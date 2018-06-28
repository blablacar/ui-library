import { color, font, fontWeight } from '_utils/branding'

export default `
  .kirk-text {

  }

  .kirk-text-button {
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
  }

  .kirk-text-body,
  .kirk-text-bodyStrong {
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
  }

  .kirk-text-caption {
    font-size: ${font.s.size};
    line-height: ${font.s.lineHeight};
  }

  .kirk-text-display1 {
    font-size: ${font.xxl.size};
    line-height: ${font.xxl.lineHeight};
  }

  .kirk-text-display2 {
    font-size: ${font.xl.size};
    line-height: ${font.xl.lineHeight};
  }

  .kirk-text-subheader,
  .kirk-text-subheaderStrong {
    font-size: ${font.l.size};
    line-height: ${font.l.lineHeight};
  }

  .kirk-text-title,
  .kirk-text-titleStrong {
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
  }

  .kirk-text-bodyStrong,
  .kirk-text-titleStrong,
  .kirk-text-subheaderStrong {
    font-weight: ${fontWeight.medium};
  }
`

import css from 'styled-jsx/css'
import { color, font, fontWeight } from '_utils/branding'

export default css`
  :global(.kirk-text) {
    margin: 0;
    font-weight: ${fontWeight.regular};
  }

  :global(.kirk-text.kirk-text-button) {
    color: ${color.primaryText};
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
  }

  :global(.kirk-text-body),
  :global(.kirk-text-bodyStrong) {
    color: ${color.secondaryText};
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
  }

  :global(.kirk-text-caption) {
    color: ${color.secondaryText};
    font-size: ${font.s.size};
    line-height: ${font.s.lineHeight};
  }

  :global(.kirk-text-title),
  :global(.kirk-text-titleStrong) {
    color: ${color.primaryText};
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
  }

  :global(.kirk-text-display1) {
    color: ${color.primaryText};
    font-size: ${font.xxl.size};
    line-height: ${font.xxl.lineHeight};
  }

  :global(.kirk-text-display2) {
    color: ${color.primaryText};
    font-size: ${font.xl.size};
    line-height: ${font.xl.lineHeight};
  }

  :global(.kirk-text-subheader),
  :global(.kirk-text-subheaderStrong) {
    color: ${color.primaryText};
    font-size: ${font.l.size};
    line-height: ${font.l.lineHeight};
  }

  :global(.kirk-text-title),
  :global(.kirk-text-titleStrong) {
    color: ${color.primaryText};
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
  }

  :global(.kirk-text-bodyStrong),
  :global(.kirk-text-subheaderStrong),
  :global(.kirk-text-titleStrong) {
    font-weight: ${fontWeight.medium};
  }
`

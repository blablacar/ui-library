import css from 'styled-jsx/css'
import { color, font, space } from '_utils/branding'

const separatorHeight = '16px'
const intValue = (value:string) => parseInt(value, 10)

export default css`
  :global(.kirk-itemChoice) {
    position: relative;
    display: flex;
    padding: 0;
    padding-top: ${space.l};
    padding-bottom: ${space.l};
    align-items: center;
    flex: 1;
    border: 0;
    background: none;
    color: ${color.primaryText};
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;
    /* Button tag fixes */
    width: 100%;
    font-family: inherit;
  }

  :global(.kirk-itemChoice--withSubLabel) {
    padding-top: ${space.m};
    padding-bottom: ${space.m};
  }

  :global(.kirk-itemChoice[aria-selected="true"]) {
    background-color: ${color.lightBackground};
  }

  :global(.kirk-itemChoice + .kirk-itemChoice) {
    margin-top: ${separatorHeight};
  }

  :global(.kirk-itemChoice + .kirk-itemChoice::before) {
    content : '';
    position: absolute;
    top: -${intValue(separatorHeight) / 2}px;
    right: 0;
    left: 0;
    border-bottom: 1px solid ${color.border};
  }

  /* Chevron right */
  :global(.kirk-chevron) {
    margin-left: auto;
  }

  :global(.kirk-itemChoice > span:first-of-type) {
    margin-right: auto;
  }

  /* Label */
  :global(.kirk-itemChoice-label) {
    color: ${color.primaryText};
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
  }

  /* Label highlighted */
  :global(.kirk-itemChoice--highlighted .kirk-itemChoice-label) {
    color: ${color.primary};
    font-size: ${font.l.size};
    line-height: ${font.l.lineHeight};
  }

  /* Sub-label */
  :global(.kirk-itemChoice-subLabel) {
    color: ${color.secondaryText};
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
    margin-top: ${space.s};
  }

  :global(.kirk-itemChoice-right) {
    display: inline-flex;
    align-items: right;
    margin-left: auto;
  }

  /* Addons */
  :global(.kirk-itemChoice-leftAddon) {
    display: inline-flex;
    align-items: center;
    margin-right: ${space.l};
  }

  :global(.kirk-itemChoice-rightAddon).
  :global(.kirk-itemChoice-chevron) {
    display: inline-flex;
    align-items: center;
    margin-left: auto;
    padding-left: ${space.l};
  }

  :global(.kirk-itemChoice .kirk-icon) {
    margin-left: auto;
  }

  :global(.kirk-itemChoice .kirk-chevron .kirk-icon) {
    margin-right: auto;
  }

  :global(.kirk-itemChoice .kirk-icon + .kirk-icon),
  :global(.kirk-itemChoice-rightAddon + .kirk-icon) {
    margin-left: ${space.m};
  }

  :global(.kirk-button.kirk-itemChoice-checkmark) {
    padding: 0;
    margin-left: auto;
    min-height: 24px;
    min-width: 24px;
  }
`

import css from 'styled-jsx/css'
import { color, font, space } from '_utils/branding'

const separatorHeight = '16px'
const intValue = (value: string) => parseInt(value, 10)

export default css`
  :global(.kirk-itemChoice) {
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;
  }

  :global(.kirk-itemChoice[aria-selected='true']) {
    background-color: ${color.lightBackground};
  }

  :global(.kirk-itemChoice + .kirk-itemChoice) {
    margin-top: ${separatorHeight};
  }

  :global(.kirk-itemChoice + .kirk-itemChoice::before) {
    content: '';
    position: absolute;
    top: -${intValue(separatorHeight) / 2}px;
    right: 0;
    left: 0;
    border-bottom: 1px solid ${color.border};
  }

  :global(.kirk-itemChoice > span:first-of-type) {
    margin-right: auto;
  }

  /* Label highlighted */
  :global(.kirk-itemChoice--highlighted) {
    color: ${color.primary};
  }

  :global(.kirk-itemChoice--disabled) {
    opacity: 0.3;
  }
`

import css from 'styled-jsx/css'
import { color, space, font } from '_utils/branding'

const bottomBorderWidth = '2px'

export default css`
.kirk-tablist {
  display: flex;
}

.kirk-tab {
  outline: none;
  text-transform: uppercase;
  padding: ${space.m} ${space.l} calc(${space.m} - ${bottomBorderWidth}) ${space.l};
  background: none;
  border: none;
  background-color: ${color.white};
  border-bottom: ${bottomBorderWidth} solid ${color.white};
  color: ${color.primaryText};
  font-size: ${font.base.size};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}

.kirk-tab-selected {
  border-bottom: 2px solid ${color.primary};
}

.kirk-tab:not(.kirk-tab-selected):hover {
  cursor: pointer;
  border-bottom: 2px solid ${color.white};
}
`

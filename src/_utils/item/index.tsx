import styled from 'styled-components'
import { color, space } from '_utils/branding'

import Item from './Item'

const StyledItem = styled(Item)`
  & {
    position: relative;
    display: flex;
    padding: 0;
    padding-top: ${space.l};
    padding-bottom: ${space.l};
    align-items: center;
    flex: 1;
    border: 0;
    background: none;
  }
  &.kirk-item--clickable:hover {
    background: ${color.hover};
  }

  &.kirk-item--hideHoverBackground.kirk-item--clickable:hover {
    background: none;
  }

  a& {
    background: none;
    text-decoration: none;
    user-select: none;
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;
  }
  /* Button tag fixes */
  button& {
    cursor: pointer;
    text-align: left;
    width: 100%;
    font-family: inherit;
    background-color: transparent;
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;
  }

  button:active&,
  button:hover& {
    outline: none;
  }

  &:disabled {
    cursor: default;
  }

  /* Text areas */
  & .kirk-item-leftText {
    flex: 1;
  }

  & .kirk-item-rightText {
    margin-left: ${space.l};
    text-align: right;
  }

  /* Text */
  & .kirk-item-title--withBody {
    margin-bottom: ${space.s};
  }

  & .kirk-item--strikethrough {
    text-decoration: line-through;
  }

  & .kirk-item-title--withButtonAddon {
    position: relative;
  }

  /* Addons */
  & .kirk-item-leftAddon,
  & .kirk-item-rightAddon {
    display: inline-flex;
    min-width: 24px;
    align-items: center;
  }

  & .kirk-item-leftAddon {
    margin-right: ${space.l};
  }

  & .kirk-item-rightAddon {
    margin-left: ${space.l};
  }

  /* Highlighted state */
  &.kirk-item--highlighted .kirk-text-title {
    color: ${color.primary};
  }

  /* Button info */
  & .kirk-item-title--withButtonAddon button {
    position: absolute;
    width: 24px;
    height: 24px;
    margin-left: ${space.s};
    bottom: 0;
  }
`

export { ItemStatus } from './Item'
export default StyledItem

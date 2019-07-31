import styled from 'styled-components'
import { color, font } from '_utils/branding'

import TimePicker from './TimePicker'

export const StyledTimePicker = styled(TimePicker)`
  & {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    max-width: 100%;
    font-size: 4em;
    font-weight: 500;
    line-height: 1;
    background-color: ${color.white};
    color: ${color.primaryText};
    border: 1px solid ${color.border};
    border-radius: 66px;
    box-sizing: border-box;
    cursor: pointer;
  }

  &:hover {
    background-color: ${color.lightBackground};
  }

  &::after {
    content: '';
    position: absolute;
    right: 32px;
    top: calc(50% - 8px);
    display: inline-block;
    padding: 5px;
    border: solid ${color.primary};
    border-width: 0 2px 2px 0;
    vertical-align: middle;
    transform: rotate(45deg);
  }

  &[aria-disabled='true'] {
    color: ${color.disabled};
    border-color: transparent;
  }

  &[aria-disabled='true']::after {
    border-color: ${color.disabled};
  }

  & > select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    font-size: ${font.base.size};
    /* Required to have <select /> with height 100% in Safari  */
    -webkit-appearance: menulist-button;
    cursor: pointer;
  }

  & > time {
    display: inline-block;
    padding-top: 6px;
    vertical-align: middle;
  }
`

export default StyledTimePicker

import css from 'styled-jsx/css'
import { color, font, transition, space } from '_utils/branding'

export default css`
  .kirk-checkbox {
    padding: ${space.l} 0;
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    color: ${color.primaryText};
    cursor: pointer;
  }

  .kirk-checkbox div {
    display: flex;
    flex-direction: column;
  }

  .kirk-checkbox div:first-child {
    padding-left: ${space.l};
    order: 2;
  }

  .kirk-subLabel {
    color: ${color.secondaryText};
    font-size: ${font.base.size};
    display: block;
    line-height: ${font.base.lineHeight};
  }

  input {
    position: absolute;
    display: inline-block;
    width: 1em;
    height: 1em;
    margin: 0;
    padding: 0;
    opacity: 0;
  }

  input + span {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    transition-duration: ${transition.duration.base};
    border: 1px solid ${color.primary};
    background-color: ${color.white};
  }

  input + .checked {
    background-color: ${color.primary};
  }

  input + .checked::after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 6px;
    top: 6px;
    left: 6px;
    border-left: 2px solid ${color.white};
    border-bottom: 2px solid ${color.white};
    transform: rotate(-45deg);
  }
`

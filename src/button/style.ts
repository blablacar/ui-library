import css from 'styled-jsx/css'
import { color, font, space, transition, buttonIconSize, shadow } from '_utils/branding'

const borderSize = '2px'

export default css`
  :global(.kirk-button) {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    padding: ${space.l} ${space.xl};
    border: 1px solid transparent;
    border-radius: 48px;
    font-size: ${font.base.size};
    line-height: 1;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    min-height: ${buttonIconSize};
    min-width: ${buttonIconSize};
    max-width: 100%;
    overflow: hidden;
    user-select: none;
    transition:
      max-width ${transition.duration.fast} ease-in,
      background-color ${transition.duration.base} ease-in;
  }

  :global(.kirk-button.kirk-itemChoice) {
    border-radius: 0;
    overflow: visible;
    width: 100%;
  }

  :global(.kirk-button span) {
    position: relative;
    display: inline-block;
    width: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  :global(.kirk-button:hover),
  :global(.kirk-button:focus),
  :global(.kirk-button:active) {
    text-decoration: none;
    outline: 0;
  }

  :global(.kirk-button-unstyled) {
    background-color: transparent;
    border-radius: inherit;
    color: ${color.accent};
    padding: inherit;
    display: inherit;
    line-height: inherit;
    font-size: inherit;
    text-align: left;
    min-width: inherit;
    min-height: inherit;
  }

  :global(.kirk-button[disabled]) {
    opacity: .5;
    cursor: default;
  }

  /* for unstyled disabled buttons, no opacity decrease (mainly icon buttons) */
  :global(.kirk-button-unstyled[disabled]) {
    opacity: 1;
  }

  :global(.kirk-button-primary) {
    background-color: ${color.primary};
    color: ${color.white};
  }

  :global(.kirk-button-shadowed) {
    border: ${borderSize} solid ${color.white};
    box-shadow: ${shadow.default};
    box-sizing: border-box;
  }

  :global(.kirk-button-primary:hover),
  :global(.kirk-button-primary:focus),
  :global(.kirk-button-primary:active) {
    background-color: ${color.primaryActive};
  }

  :global(.kirk-button-secondary) {
    background-color: ${color.white};
    border-color: ${color.border};
    color: ${color.accent};
  }
  :global(.kirk-button-secondary.kirk-button-shadowed) {
    border: none;
  }

  :global(.kirk-button-secondary:hover),
  :global(.kirk-button-secondary:focus),
  :global(.kirk-button-secondary:active) {
    background-color: ${color.secondaryActive};
  }

  :global(.kirk-button-loading) {
    background-color: transparent;
    max-width: initial;
  }

  :global(.kirk-button-loading:hover),
  :global(.kirk-button-loading:focus),
  :global(.kirk-button-loading:active) {
    background-color: transparent;
  }

  :global(.kirk-button-loading[disabled]) {
    opacity: 1;
  }

  :global(.kirk-button-loading span) {
    opacity: 0;
  }

  :global(svg.kirk-button-loader) {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -24px;
  }

  :global(.kirk-button-valid),
  :global(.kirk-button-valid:focus),
  :global(.kirk-button-valid:hover),
  :global(.kirk-button-valid:active) {
    background-color: ${color.success};
    color: ${color.white};
    max-width: initial;
    transition: none;
  }

  :global(.kirk-button-valid[disabled]) {
    opacity: 1;
  }

  :global(.kirk-button-valid span) {
    opacity: 0;
  }

  :global(.kirk-button-warning) {
    background-color: ${color.danger};
    color: ${color.white};
  }

  :global(.kirk-button-icon) {
    display: inline-block;
    padding: 0;
    line-height: 0;
    width: ${buttonIconSize};
    height: ${buttonIconSize};
  }

  /* Note: Safari 10 can not have flex context on <button> element */
  :global(.kirk-button-icon span) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${buttonIconSize};
    height: ${buttonIconSize};
  }

  :global(.kirk-button-icon.kirk-button-shadowed span) {
    width: calc(${buttonIconSize} - ${borderSize} * 2);
    height: calc(${buttonIconSize} - ${borderSize} * 2);
  }

  @media (hover:none), (hover:on-demand) {
    :global(.kirk-button-secondary:hover) {
      background-color: ${color.white};
    }
  }
`

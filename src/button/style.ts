import * as css from 'styled-jsx/css'
import { color, font, space, transition, componentSizes, shadow } from '_utils/branding'

const borderSize = '2px'

export default css`
  :global(.kirk-button) {
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
    padding: ${space.l} ${space.xl};
    border: 1px solid transparent;
    border-radius: 48px;
    font-size: ${font.base.size};
    line-height: 1;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    min-height: ${componentSizes.buttonIconSize};
    min-width: ${componentSizes.buttonIconSize};
    max-width: 100%;
    overflow: hidden;
    user-select: none;
    align-items: center;
    transition: max-width ${transition.duration.fast} ease-in,
      background-color ${transition.duration.base} ease-in;
  }

  :global(.kirk-button svg, .kirk-button img) {
    flex-shrink: 0;
  }

  :global(.kirk-button.kirk-itemChoice) {
    border-radius: 0;
    overflow: visible;
    width: 100%;
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
    opacity: 0.5;
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

  :global(.kirk-button-tertiary) {
    background-color: ${color.white};
    border-color: transparent;
    color: ${color.accent};
  }

  :global(.kirk-button-tertiary:hover),
  :global(.kirk-button-tertiary:focus),
  :global(.kirk-button-tertiary:active) {
    background-color: ${color.secondaryActive};
  }

  :global(.kirk-button-loading) {
    background-color: transparent;
    max-width: initial;
    border: 0;
  }

  :global(.kirk-button-loading:hover),
  :global(.kirk-button-loading:focus),
  :global(.kirk-button-loading:active) {
    background-color: transparent;
  }

  :global(.kirk-button-loading[disabled]),
  :global(.kirk-button-checked[disabled]) {
    opacity: 1;
  }

  :global(svg.kirk-button-loader) {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -24px;
  }

  :global(.kirk-button-checked) {
    border: 0;
  }

  :global(.kirk-button-warning) {
    background-color: ${color.danger};
    color: ${color.white};
  }

  :global(.kirk-button-bubble) {
    display: inline-flex;
    padding: 0;
    line-height: 0;
    width: ${componentSizes.buttonIconSize};
    height: ${componentSizes.buttonIconSize};
  }

  /* Note: Safari 10 can not have flex context on <button> element */
  :global(.kirk-button-bubble) {
    justify-content: center;
    width: ${componentSizes.buttonIconSize};
    height: ${componentSizes.buttonIconSize};
  }

  :global(.kirk-button-bubble.kirk-button-shadowed) {
    width: calc(${componentSizes.buttonIconSize} - ${borderSize} * 2);
    height: calc(${componentSizes.buttonIconSize} - ${borderSize} * 2);
  }

  @media (hover: none), (hover: on-demand) {
    :global(.kirk-button-secondary:hover) {
      background-color: ${color.white};
    }
  }
`

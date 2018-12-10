import css from 'styled-jsx/css'
import { color, radius, space } from '_utils/branding'

const modal = {
  size: {
    m: '662px',
    l: '928px',
  },
}

export default css`
  :global(.kirk-modal-dimmer),
  :global(.kirk-modal-dimmer--fullscreen) {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 999;
  }

  :global(.kirk-modal-dimmer--visible) {
    background-color: rgba(0, 0, 0, 0.5);
  }

  :global(.kirk-modal-dimmer--hide) {
    background-color: ${color.white};
  }

  :global(.kirk-modal-dimmer--fullscreen) {
    background-color: transparent;
  }

  :global(.kirk-modal-dimmer--inactive) {
    background-color: transparent;
    z-index: 990;
  }

  .kirk-modal {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .kirk-modal-dialog {
    position: relative;
    display: flex;
    padding: ${space.xl};
    margin: ${space.xl} auto;
    width: ${modal.size.m};
    max-width: 80%;
    background-color: ${color.white};
    border-radius: ${radius.m};
  }

  .kirk-modal-body {
    flex: 1;
  }

  .kirk-modal--large .kirk-modal-dialog {
    width: ${modal.size.l};
  }

  :global(.kirk-modal-dimmer--fullscreen .kirk-modal-dialog) {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    width: auto;
    max-width: none;
    min-height: 100%;
  }

  .kirk-modal--hasCloseButton .kirk-modal-dialog {
    padding-top: 70px;
  }

  :global(.kirk-modal--hasCloseButton .kirk-modal-closeButton) {
    position: absolute;
    top: 8px;
    left: 8px;
    background-color: transparent;
  }
`

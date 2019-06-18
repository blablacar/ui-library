import css from 'styled-jsx/css'
import { color, radius, space, modalSize } from '_utils/branding'

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
    width: ${modalSize.m};
    background-color: ${color.white};
    border-radius: ${radius.m};
  }

  .kirk-modal--small .kirk-modal-dialog {
    width: ${modalSize.s};
  }

  .kirk-modal--large .kirk-modal-dialog {
    width: ${modalSize.l};
  }

  .kirk-modal-body {
    flex: 1;
  }

  :global(.kirk-modal-dimmer--fullscreen .kirk-modal-dialog) {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    width: auto;
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

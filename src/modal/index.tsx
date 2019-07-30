import styled from 'styled-components'
import { color, radius, space, modalSize } from '_utils/branding'

import Modal from './Modal'

const StyledModal = styled(Modal)`
  & {
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

  &.kirk-modal--small .kirk-modal-dialog {
    width: ${modalSize.s};
  }

  &.kirk-modal--large .kirk-modal-dialog {
    width: ${modalSize.l};
  }

  .kirk-modal-body {
    flex: 1;
  }

  &.kirk-modal--hasCloseButton .kirk-modal-dialog {
    padding-top: 70px;
  }

  &.kirk-modal--hasCloseButton .kirk-modal-closeButton {
    position: absolute;
    top: 8px;
    left: 8px;
    background-color: transparent;
  }
`
export { ModalSize } from './Modal'
export default StyledModal

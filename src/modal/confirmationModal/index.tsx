import styled from 'styled-components'
import { color, space, modalSize } from '_utils/branding'
import ConfirmationModal from './ConfirmationModal'

const footerHeight = '96px' /* = padding + content */

const StyledConfirmationModal = styled(ConfirmationModal)`
  &.kirk-confirmationModal {
    background-color: rgba(5, 71, 82, 0.95);
    color: ${color.white};
  }

  &.kirk-confirmationModal .kirk-modal-dialog {
    background: transparent;
    width: auto !important;
    padding: 0;
    max-width: initial;
    margin: 0;
    display: flex;
    height: 100%;
  }

  &.kirk-confirmationModal--large {
    text-align: center;
  }

  & .kirk-confirmationModal-dialog {
    position: relative;
    margin: 0 auto;
    box-shadow: none;
    width: auto;
    min-height: 100%;
    padding-top: ${space.xl};
    padding-bottom: ${footerHeight};
  }

  &.kirk-confirmationModal--large .kirk-confirmationModal-dialog {
    max-width: ${modalSize.m};
  }

  & .kirk-confirmationModal-body {
    padding: ${space.xl};
  }

  & .kirk-confirmationModal-icon {
    margin-top: ${space.xl};
    margin-left: ${space.xl};
  }

  & .kirk-confirmationModal-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${footerHeight};
    display: flex;
    justify-content: flex-end;
    padding: ${space.xl};
    background-color: ${color.warningBackground};
  }

  &.kirk-confirmationModal--large .kirk-confirmationModal-footer {
    position: relative;
    display: block;
    margin: 0 auto;
    background: none;
  }

  & .kirk-confirmationModal-footer {
    justify-content: flex-end;
  }

  &.kirk-confirmationModal--hasCloseButton .kirk-confirmationModal-footer {
    justify-content: space-between;
  }

  &.kirk-confirmationModal--large .kirk-confirmationModal-footer .kirk-button {
    margin: ${space.l} ${space.xl} 0;
  }

  & .kirk-confirmationModal-closeButton {
    vertical-align: bottom; /* vertical alignment to be fixed in Button */
    border: 0; /* content alignment to be fixed in Button */
  }
`

export {
  ConfirmationModalProps,
  ConfirmationModalSize,
  ConfirmationModalStatus,
} from './ConfirmationModal'
export default StyledConfirmationModal

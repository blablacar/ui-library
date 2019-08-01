import styled from 'styled-components'
import { color, font, space, modalSize } from '_utils/branding'
import SuccessModal from './SuccessModal'

const footerHeight = '96px' /* = padding + content */

const StyledSuccessModal = styled(SuccessModal)`
  & .kirk-successModal {
    background-color: ${color.successBackground};
    color: ${color.white};
  }

  & .kirk-modal--large {
    text-align: center;
  }

  & .kirk-modal.kirk-successModal .kirk-modal-dialog {
    margin: 0 auto;
    max-width: ${modalSize.m};
    height: 100%;
    padding: ${space.xl} 0 ${footerHeight} 0;
    background-color: ${color.successBackground};
  }

  /* Stronger selector to override Modal component styling */
  &.kirk-modal-dimmer .kirk-modal.kirk-successModal .kirk-modal-dialog.kirk-modal-dialog {
    width: auto;
  }

  & .kirk-modal--large.kirk-successModal .kirk-modal-dialog {
    padding: ${space.xl} 0;
  }

  & .kirk-modal.kirk-successModal .kirk-modal-body {
    padding: ${space.xl};
    font-size: ${font.l.size};
    line-height: ${font.l.lineHeight};
    text-align: center;
    align-items: center;
  }

  & .kirk-modal--large.kirk-successModal .kirk-modal-body {
    position: relative;
    display: flex;
  }

  & .kirk-modal--large .kirk-successModal-bodyItem {
    width: 50%;
  }

  & .kirk-modal--large .kirk-successModal-bodyItem:nth-child(odd) {
    padding-right: ${space.xl};
  }

  & .kirk-modal--large .kirk-successModal-bodyItem:nth-child(even) {
    padding-left: ${space.xl};
  }

  & .kirk-successModal-image {
    width: 80%;
    margin-bottom: ${space.xl};
  }

  & .kirk-modal--large .kirk-successModal-image {
    margin-bottom: 0;
  }

  & .kirk-successModal-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${footerHeight};
    padding: ${space.xl};
    text-align: center;
  }

  & .kirk-modal--large .kirk-successModal-footer {
    position: relative;
    display: block;
    margin: 0 auto;
  }

  & .kirk-modal--large .kirk-successModal-footer .kirk-button {
    margin: ${space.l} ${space.xl} 0;
  }

  & .kirk-successModal-confirmButton {
    vertical-align: bottom; /* vertical alignment to be fixed in Button */
    border: 0; /* content alignment to be fixed in Button */
  }
`

export default StyledSuccessModal
